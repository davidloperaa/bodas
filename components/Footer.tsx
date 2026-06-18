export default function Footer() {
  return (
    <footer className="py-16 px-6 text-center"
      style={{ background: "linear-gradient(180deg, #fdf0f4, #f5eef8)" }}>
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-center mb-4">
          <svg viewBox="0 0 160 40" width="160" height="40" fill="none" style={{ opacity: 0.6 }}>
            <path d="M10 30 Q80 5 150 25" stroke="#a8c5a0" strokeWidth="1.2" fill="none"/>
            <circle cx="40" cy="16" r="5" fill="#e8b4b8" opacity="0.7"/>
            <circle cx="80" cy="10" r="4" fill="#c4b5d4" opacity="0.65"/>
            <circle cx="120" cy="18" r="5" fill="#e8b4b8" opacity="0.6"/>
            <ellipse cx="55" cy="22" rx="6" ry="3" fill="#a8c5a0" opacity="0.4" transform="rotate(-15 55 22)"/>
            <ellipse cx="100" cy="18" rx="5" ry="2.5" fill="#a8c5a0" opacity="0.35" transform="rotate(-10 100 18)"/>
          </svg>
        </div>

        <h2 className="text-5xl mb-4"
          style={{ fontFamily: "'Dancing Script', cursive", color: "#6b4c5e" }}>
          Sofía & Alejandro
        </h2>
        <p className="text-sm tracking-widest uppercase mb-8"
          style={{ color: "#c9787f", fontFamily: "'Lato', sans-serif", fontWeight: 300, letterSpacing: "0.2em" }}>
          14 · 02 · 2026
        </p>

        <div className="section-divider mb-8" />

        <p className="text-sm italic mb-8"
          style={{ color: "#9b7a8e", fontFamily: "'Playfair Display', serif" }}>
          &ldquo;Y vivieron felices para siempre...&rdquo;
        </p>

        <div className="flex justify-center flex-wrap gap-4 mb-8">
          {[
            { href: "#nosotros", label: "Nosotros" },
            { href: "#ceremonia", label: "Ceremonia" },
            { href: "#galeria", label: "Galería" },
            { href: "#confirmacion", label: "RSVP" },
            { href: "#recomendaciones", label: "Tips" },
          ].map((link) => (
            <a key={link.href} href={link.href}
              className="text-xs tracking-widest uppercase transition-colors hover:opacity-100"
              style={{ color: "#c4b5d4", fontFamily: "'Lato', sans-serif", opacity: 0.75 }}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex justify-center mb-6">
          <svg viewBox="0 0 160 40" width="160" height="40" fill="none" style={{ opacity: 0.6, transform: "scaleY(-1)" }}>
            <path d="M10 30 Q80 5 150 25" stroke="#a8c5a0" strokeWidth="1.2" fill="none"/>
            <circle cx="40" cy="16" r="5" fill="#e8b4b8" opacity="0.7"/>
            <circle cx="80" cy="10" r="4" fill="#c4b5d4" opacity="0.65"/>
            <circle cx="120" cy="18" r="5" fill="#e8b4b8" opacity="0.6"/>
            <ellipse cx="55" cy="22" rx="6" ry="3" fill="#a8c5a0" opacity="0.4" transform="rotate(-15 55 22)"/>
            <ellipse cx="100" cy="18" rx="5" ry="2.5" fill="#a8c5a0" opacity="0.35" transform="rotate(-10 100 18)"/>
          </svg>
        </div>

        <p className="text-xs" style={{ color: "#c4b5d4", fontFamily: "'Lato', sans-serif" }}>
          Con amor, Sofía & Alejandro 🌸
        </p>
      </div>
    </footer>
  );
}
