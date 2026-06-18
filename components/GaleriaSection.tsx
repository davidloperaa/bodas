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
  { id: 9, label: "Sesión oficial", emoji: "🌸" },
];

const COLORS = [
  "linear-gradient(135deg, #f7e4e6, #e8b4b8)",
  "linear-gradient(135deg, #e4dced, #c4b5d4)",
  "linear-gradient(135deg, #d4e8d0, #a8c5a0)",
  "linear-gradient(135deg, #fdf0f2, #f7c5ca)",
  "linear-gradient(135deg, #e4dced, #b4a0c4)",
  "linear-gradient(135deg, #deeadc, #b8d4b4)",
  "linear-gradient(135deg, #f7e4e6, #d4a8b4)",
  "linear-gradient(135deg, #e4dced, #c4b5d4)",
  "linear-gradient(135deg, #f5e8ea, #e8b4b8)",
];

export default function GaleriaSection() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="galeria" className="py-24 px-6" style={{ background: "#fdf6ee" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-widest uppercase mb-3"
            style={{ color: "#9b7a8e", fontFamily: "'Lato', sans-serif", fontWeight: 300, letterSpacing: "0.25em" }}>
            Momentos Especiales
          </p>
          <h2 className="text-5xl md:text-6xl mb-4"
            style={{ fontFamily: "'Dancing Script', cursive", color: "#6b4c5e" }}>
            Nuestra Galería
          </h2>
          <div className="section-divider mb-6" />
          <p className="max-w-md mx-auto"
            style={{ color: "#9b7a8e", fontFamily: "'Lato', sans-serif", fontWeight: 300, lineHeight: 1.8 }}>
            Cada imagen cuenta una parte de nuestra historia.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {PHOTOS.map((photo, i) => (
            <div key={photo.id}
              className="relative overflow-hidden cursor-pointer group"
              style={{ aspectRatio: i % 5 === 0 ? "1/1.3" : "1/1", borderRadius: "20px" }}
              onClick={() => setSelected(i)}>
              <div className="w-full h-full flex flex-col items-center justify-center transition-transform duration-500 group-hover:scale-105"
                style={{ background: COLORS[i] }}>
                <span className="text-5xl mb-3 drop-shadow-sm">{photo.emoji}</span>
                <p className="text-sm text-center px-4"
                  style={{ color: "#6b4c5e", fontFamily: "'Lato', sans-serif", fontWeight: 300, opacity: 0.85 }}>
                  {photo.label}
                </p>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-[20px]"
                style={{ background: "rgba(107,76,94,0.25)" }}>
                <span className="text-4xl">🔍</span>
              </div>
            </div>
          ))}
        </div>

        {selected !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6"
            style={{ background: "rgba(107,76,94,0.85)", backdropFilter: "blur(6px)" }}
            onClick={() => setSelected(null)}>
            <div className="relative max-w-lg w-full rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}>
              <div className="w-full flex flex-col items-center justify-center py-20"
                style={{ background: COLORS[selected], minHeight: "380px" }}>
                <span className="text-8xl mb-4">{PHOTOS[selected].emoji}</span>
                <p className="text-xl" style={{ color: "#6b4c5e", fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
                  {PHOTOS[selected].label}
                </p>
              </div>
              <div className="p-3 text-center" style={{ background: "white" }}>
                <p className="text-xs tracking-widest uppercase" style={{ color: "#9b7a8e", fontFamily: "'Lato', sans-serif" }}>
                  {selected + 1} / {PHOTOS.length}
                </p>
              </div>
              <button className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center text-sm"
                style={{ background: "rgba(255,255,255,0.7)", color: "#6b4c5e" }}
                onClick={() => setSelected(null)}>✕</button>
              <button className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center"
                style={{ background: "rgba(255,255,255,0.7)", color: "#6b4c5e" }}
                onClick={() => setSelected((selected - 1 + PHOTOS.length) % PHOTOS.length)}>←</button>
              <button className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center"
                style={{ background: "rgba(255,255,255,0.7)", color: "#6b4c5e" }}
                onClick={() => setSelected((selected + 1) % PHOTOS.length)}>→</button>
            </div>
          </div>
        )}

        <p className="text-center mt-10 text-sm italic"
          style={{ color: "#c4a8b4", fontFamily: "'Lato', sans-serif" }}>
          * Reemplaza estos espacios con tus fotos reales subiendo imágenes en /public/gallery/
        </p>
      </div>
    </section>
  );
}
