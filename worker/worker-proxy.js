export default {
  async fetch(req, env) {
    const requestOrigin = req.headers.get('Origin') || '';
    const allowOrigin = env.ALLOW_ORIGIN || '*';
    const cors = {
      'Access-Control-Allow-Origin': allowOrigin === '*'
        ? '*'
        : (requestOrigin && allowOrigin.split(',').map(s => s.trim()).includes(requestOrigin) ? requestOrigin : 'https://invalid'),
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '600',
      'Vary': 'Origin'
    };
    if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });
    if (req.method !== 'POST') {
      return new Response(JSON.stringify({ ok:false, error:'Method Not Allowed' }), {
        status: 405, headers: { ...cors, 'Content-Type': 'application/json' }
      });
    }
    let incoming = {};
    try { incoming = await req.json(); } catch {}
    const payload = { ...incoming, key: env.MAKE_SECRET };
    const r = await fetch(env.MAKE_URL, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload) });
    const txt = await r.text();
    return new Response(txt, { status: r.status, headers: { ...cors, 'Content-Type': 'text/plain; charset=utf-8' } });
  }
};
