export default function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Site A</h1>
      <p>Нажми на кнопку ниже, чтобы установить partitioned cookie:</p>
      <a
        href="/api/set-cookie"
        style={{
          display: "inline-block",
          padding: "10px 20px",
          background: "#0070f3",
          color: "#fff",
          borderRadius: "5px",
          textDecoration: "none"
        }}
      >
        Установить cookie и показать iframe
      </a>
    </div>
  );
}
