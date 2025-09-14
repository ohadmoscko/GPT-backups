export default {
  async fetch(req, env) {
    const requestOrigin = req.headers.get('Origin') || '';
    const allowOrigin = (env.ALLOW_ORIGIN || '*').trim();

    const allowList = allowOrigin === '*' ? ['*'] : allowOrigin.split(',').map(s => s.trim()).filter(Boolean);
    const originAllowed = allowList.includes('*') || allowList.includes(requestOrigin);
    const cors = {
      'Access-Control-Allow-Origin': allowList.includes('*') ? '*' : (requestOrigin && originAllowed ? requestOrigin : 'https://invalid'),
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, X-First-Secret',
      'Access-Control-Max-Age': '600',
      'Vary': 'Origin'
    };

    if (req.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: cors });
    }
    if (req.method !== 'POST') {
      return new Response(JSON.stringify({ ok: false, error: 'Method Not Allowed' }), {
        status: 405, headers: { ...cors, 'Content-Type': 'application/json' }
      });
    }
    if (!env.MAKE_URL) {
      return new Response(JSON.stringify({ ok: false, error: 'Missing MAKE_URL' }), {
        status: 500, headers: { ...cors, 'Content-Type': 'application/json' }
      });
    }
    if (!env.MAKE_SECRET) {
      return new Response(JSON.stringify({ ok: false, error: 'Missing MAKE_SECRET' }), {
        status: 500, headers: { ...cors, 'Content-Type': 'application/json' }
      });
    }

    let incoming = {};
    try { incoming = await req.json(); } catch { incoming = {}; }

    // Assemble the payload and a URL that also carries the secret as a query param (for maximum compatibility)
    const payload = { ...incoming, key: env.MAKE_SECRET };

    const makeUrl = new URL(env.MAKE_URL);
    makeUrl.searchParams.set('key', env.MAKE_SECRET); // optional: Make will ignore if not mapped

    const r = await fetch(makeUrl.toString(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'FirstWorkflow-Worker/2.0',
        // Also forward in a header in case your Make webhook prefers headers
        'X-First-Secret': env.MAKE_SECRET
      },
      body: JSON.stringify(payload)
    });

    const text = await r.text();
    const contentType = r.headers.get('content-type') || 'text/plain; charset=utf-8';

    return new Response(text, { status: r.status, headers: { ...cors, 'Content-Type': contentType } });
  }
};
