"use client";
import { useState } from "react";

const PHOTOS = [
  { id: 1, label: "Nuestra primera foto", emoji: "📸" },
  { id: 2, label: "En las montañas", emoji: "🏔️" },
  { id: 3, label: "El día de la propuesta", emoji: "💍" },
  { id: 4, label: "Sesión preboda", emoji: "💑" },
  { id: 5, label: "Nuestro viaje favorito", emoji: "✈️" },
  { id: 6, label: "Navidad juntos", emoji: "🎄" },
  { id: 7, label: "Cocinando en casa", emoji: "🍳" },
  { id: 8, label: "En la playa", emoji: "🏖️" },
  { id: 9, label: "Sesión oficial", emoji: "💛" },
];

const COLORS = [
  "linear-gradient(135deg, #c9a96e, #e8d5b0)",
  "linear-gradient(135deg, #6b3a2a, #c9a96e)",
  "linear-gradient(135deg, #2c1810, #6b3a2a)",
  "linear-gradient(135deg, #d4a0a0, #c9a96e)",
  "linear-gradient(135deg, #c9a96e, #2c1810)",
  "linear-gradient(135deg, #e8d5b0, #d4a0a0)",
  "linear-gradient(135deg, #4a2c1a, #c9a96e)",
  "linear-gradient(135deg, #c9a96e, #4a2c1a)",
  "linear-gradient(135deg, #2c1810, #c9a96e)",
];

export default function GaleriaSection() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="galeria" className="py-24 px-6" style={{ background: "#f5ece0" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="text-xs tracking-widest uppercase mb-4"
            style={{ color: "#c9a96e", fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
          >
            Momentos Especiales
          </p>
          <h2
            className="text-5xl md:text-6xl mb-6"
            style={{ fontFamily: "'Dancing Script', cursive", color: "#2c1810" }}
          >
            Nuestra Galería
          </h2>
          <div className="section-divider" />
          <p
            className="mt-6 max-w-lg mx-auto"
            style={{ color: "#6b4c3b", fontFamily: "'Lato', sans-serif", fontWeight: 300, lineHeight: 1.8 }}
          >
            Cada imagen cuenta una parte de nuestra historia. Aquí compartimos los momentos
            que han definido nuestro camino juntos.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {PHOTOS.map((photo, i) => (
            <div
              key={photo.id}
              className="relative overflow-hidden rounded-xl cursor-pointer group"
              style={{ aspectRatio: i % 5 === 0 ? "1/1.3" : "1/1" }}
              onClick={() => setSelected(i)}
            >
              <div
                className="w-full h-full flex flex-col items-center justify-center transition-transform duration-500 group-hover:scale-105"
                style={{ background: COLORS[i] }}
              >
                <span className="text-5xl mb-3">{photo.emoji}</span>
                <p
                  className="text-sm text-center px-4"
                  style={{ color: "rgba(255,255,255,0.9)", fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                >
                  {photo.label}
                </p>
              </div>
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                style={{ background: "rgba(44,24,16,0.4)" }}
              >
                <span className="text-white text-3xl">🔍</span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selected !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            style={{ background: "rgba(0,0,0,0.9)" }}
            onClick={() => setSelected(null)}
          >
            <div
              className="relative max-w-2xl w-full rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="w-full flex flex-col items-center justify-center py-20"
                style={{ background: COLORS[selected], minHeight: "400px" }}
              >
                <span className="text-8xl mb-4">{PHOTOS[selected].emoji}</span>
                <p
                  className="text-xl"
                  style={{ color: "white", fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}
                >
                  {PHOTOS[selected].label}
                </p>
              </div>
              <div
                className="p-4 text-center"
                style={{ background: "white" }}
              >
                <p
                  className="text-xs tracking-widest uppercase"
                  style={{ color: "#c9a96e", fontFamily: "'Lato', sans-serif" }}
                >
                  {selected + 1} / {PHOTOS.length}
                </p>
              </div>
              <button
                className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: "rgba(255,255,255,0.2)", color: "white" }}
                onClick={() => setSelected(null)}
              >
                ✕
              </button>
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: "rgba(255,255,255,0.2)", color: "white" }}
                onClick={() => setSelected((selected - 1 + PHOTOS.length) % PHOTOS.length)}
              >
                ←
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: "rgba(255,255,255,0.2)", color: "white" }}
                onClick={() => setSelected((selected + 1) % PHOTOS.length)}
              >
                →
              </button>
            </div>
          </div>
        )}

        <p
          className="text-center mt-10 text-sm"
          style={{ color: "#c9a96e", fontFamily: "'Lato', sans-serif", fontStyle: "italic" }}
        >
          * Reemplaza estos espacios con tus fotos reales subiendo imágenes en /public/gallery/
        </p>
      </div>
    </section>
  );
}
