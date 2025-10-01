export default function handler(req, res) {
  res.setHeader(
    "Set-Cookie",
    "chipsTest=HelloFromSiteA; Path=/; Secure; HttpOnly; SameSite=None; Partitioned"
  );
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.end(`
    <h1>Site A</h1>
    <p>Partitioned cookie установлена: <code>chipsTest=HelloFromSiteA</code></p>
    <iframe src="https://partition-cookie-test-site-b.vercel.app/api/index" width="600" height="200"></iframe>
    <p><a href="/">Назад</a></p>
  `);
}
