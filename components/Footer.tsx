export default function Footer() {
  return (
    <footer
      className="py-16 px-6 text-center"
      style={{ background: "#2c1810" }}
    >
      <div className="max-w-2xl mx-auto">
        <h2
          className="text-5xl mb-4"
          style={{ fontFamily: "'Dancing Script', cursive", color: "white" }}
        >
          Sofía & Alejandro
        </h2>
        <p
          className="text-sm tracking-widest uppercase mb-8"
          style={{ color: "rgba(201,169,110,0.8)", fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
        >
          14 · 02 · 2026
        </p>
        <div className="section-divider mb-8" />
        <p
          className="text-sm italic mb-8"
          style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Playfair Display', serif" }}
        >
          &ldquo;Y vivieron felices para siempre...&rdquo;
        </p>
        <div className="flex justify-center gap-6 mb-8">
          {["#nosotros", "#ceremonia", "#galeria", "#confirmacion", "#recomendaciones"].map((href) => (
            <a
              key={href}
              href={href}
              className="text-xs tracking-widest uppercase transition-colors hover:text-amber-400"
              style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Lato', sans-serif" }}
            >
              {href.slice(1)}
            </a>
          ))}
        </div>
        <p
          className="text-xs"
          style={{ color: "rgba(255,255,255,0.2)", fontFamily: "'Lato', sans-serif" }}
        >
          Con amor, Sofía & Alejandro
        </p>
      </div>
    </footer>
  );
}
