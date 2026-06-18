"use client";
import { useState, useEffect } from "react";

const links = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#ceremonia", label: "Ceremonia" },
  { href: "#galeria", label: "Galería" },
  { href: "#confirmacion", label: "Confirmar" },
  { href: "#recomendaciones", label: "Recomendaciones" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(253,248,240,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        boxShadow: scrolled ? "0 2px 20px rgba(201,169,110,0.2)" : "none",
        borderBottom: scrolled ? "1px solid rgba(201,169,110,0.2)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#hero"
          className="text-2xl"
          style={{ fontFamily: "'Dancing Script', cursive", color: scrolled ? "#c9a96e" : "white" }}
        >
          S & A
        </a>

        <ul className="hidden md:flex gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm tracking-widest uppercase transition-colors duration-300"
                style={{
                  color: scrolled ? "#2c1810" : "white",
                  fontFamily: "'Lato', sans-serif",
                  fontWeight: 300,
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#c9a96e")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = scrolled ? "#2c1810" : "white")}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ color: scrolled ? "#2c1810" : "white" }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden" style={{ background: "rgba(253,248,240,0.98)" }}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block px-6 py-3 text-sm tracking-widest uppercase border-b"
              style={{
                color: "#2c1810",
                borderColor: "#e8d5b0",
                fontFamily: "'Lato', sans-serif",
              }}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
