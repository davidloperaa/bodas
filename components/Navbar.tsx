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
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(253,246,238,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 2px 20px rgba(232,180,184,0.18)" : "none",
        borderBottom: scrolled ? "1px solid rgba(232,180,184,0.25)" : "none",
      }}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="text-2xl transition-colors"
          style={{ fontFamily: "'Dancing Script', cursive", color: scrolled ? "#c9787f" : "#6b4c5e" }}>
          S & A
        </a>

        <ul className="hidden md:flex gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href}
                className="text-xs tracking-widest uppercase transition-colors duration-300 hover:text-rose-400"
                style={{ color: scrolled ? "#6b4c5e" : "#7a5c6e", fontFamily: "'Lato', sans-serif", fontWeight: 400 }}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}
          style={{ color: scrolled ? "#6b4c5e" : "#7a5c6e" }}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div style={{ background: "rgba(253,246,238,0.98)", borderTop: "1px solid rgba(232,180,184,0.2)" }}>
          {links.map((l) => (
            <a key={l.href} href={l.href}
              className="block px-6 py-3 text-xs tracking-widest uppercase border-b hover:bg-rose-50 transition-colors"
              style={{ color: "#6b4c5e", borderColor: "#f7e4e6", fontFamily: "'Lato', sans-serif" }}
              onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
