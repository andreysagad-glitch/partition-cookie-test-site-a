export default function handler(req, res) {
  if (req.url.startsWith("/set-cookie")) {
    res.setHeader(
      "Set-Cookie",
      "chipsTest=HelloFromSiteA; Path=/; Secure; HttpOnly; SameSite=None; Partitioned"
    );
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end(`
      <h1>Site A</h1>
      <p>Partitioned cookie установлена: <code>chipsTest=HelloFromSiteA</code></p>
      <p>Проверим кросс-сайт:</p>
      <iframe src="https://partition-cookie-test-site-b.vercel.app/api/index" width="600" height="200"></iframe>
      <p><a href="/api/check-cookie">Проверить cookie на Site A</a></p>
    `);
  } else if (req.url.startsWith("/check-cookie")) {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.end(`
      <h1>Site A (проверка)</h1>
      <pre>${JSON.stringify(req.headers.cookie || "нет cookie", null, 2)}</pre>
      <p><a href="/api/set-cookie">Назад</a></p>
    `);
  } else {
    res.statusCode = 404;
    res.end("Not found");
  }
}
