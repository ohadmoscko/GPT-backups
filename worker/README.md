# Cloudflare Worker Proxy
Environment variables required:
- MAKE_URL (Text): Make webhook URL
- MAKE_SECRET (Secret): shared secret (same as Make router)
- ALLOW_ORIGIN (Text): allowed origins (e.g., https://ohadmoscko.github.io)

Behavior: adds `key` server-side, handles CORS (OPTIONS 204), forwards POST to Make.
