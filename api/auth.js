/**
 * Vercel serverless function implementing the two-step GitHub OAuth flow
 * that Decap CMS expects when using a custom backend (base_url).
 *
 * Step 1 — GET /api/auth  (no code param)
 *   Decap opens a popup to this URL. We redirect to GitHub's OAuth page.
 *
 * Step 2 — GET /api/auth?code=...
 *   GitHub redirects back here with a `code`. We exchange it for a token
 *   and return an HTML page that postMessages the token back to the opener —
 *   exactly what Decap CMS listens for.
 *
 * GitHub OAuth App settings:
 *   Homepage URL:               https://women-org-ua.vercel.app
 *   Authorization callback URL: https://women-org-ua.vercel.app/api/auth
 *
 * Required Vercel env vars (either naming convention works):
 *   DECAP_CMS_GITHUB_CLIENT_ID
 *   DECAP_CMS_GITHUB_CLIENT_SECRET
 */

export default async function handler(req, res) {
  // CORS preflight
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.status(204).end();
    return;
  }

  const client_id =
    process.env.DECAP_CMS_GITHUB_CLIENT_ID || process.env.GITHUB_CLIENT_ID;
  const client_secret =
    process.env.DECAP_CMS_GITHUB_CLIENT_SECRET ||
    process.env.GITHUB_CLIENT_SECRET;

  if (!client_id || !client_secret) {
    res.status(500).send("Server misconfigured: missing GitHub OAuth env vars");
    return;
  }

  const { code } = req.query;

  // ── Step 1: no code yet → redirect to GitHub ──────────────────────────────
  if (!code) {
    const params = new URLSearchParams({
      client_id,
      scope: "repo",
    });
    res.redirect(302, `https://github.com/login/oauth/authorize?${params}`);
    return;
  }

  // ── Step 2: code received → exchange for token, postMessage to opener ─────
  try {
    const tokenResp = await fetch(
      "https://github.com/login/oauth/access_token",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ client_id, client_secret, code }),
      },
    );

    const data = await tokenResp.json();

    if (data.error) {
      res
        .status(400)
        .send(`OAuth error: ${data.error} — ${data.error_description}`);
      return;
    }

    // Decap CMS listens for a postMessage from the popup with this exact format:
    // "authorization:github:success:{token, provider}"
    const payload = JSON.stringify({
      token: data.access_token,
      provider: "github",
    });

    res.setHeader("Content-Type", "text/html");
    res.status(200).send(`<!DOCTYPE html>
<html>
<head><title>Authorizing...</title></head>
<body>
<script>
  (function() {
    var payload = ${JSON.stringify(payload)};
    function sendToken(e) {
      window.opener.postMessage(
        "authorization:github:success:" + payload,
        e.origin
      );
    }
    window.addEventListener("message", sendToken, false);
    window.opener.postMessage("authorizing:github", "*");
  })();
</script>
<p>Authorizing, please wait...</p>
</body>
</html>`);
  } catch (err) {
    console.error("OAuth exchange failed", err);
    res.status(500).send("OAuth exchange failed");
  }
}
