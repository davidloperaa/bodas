const HOTELES = [
  { name: "Hotel Sofitel Gold Tower", category: "⭐⭐⭐⭐⭐", desc: "Lujo en el corazón de Bogotá. A 15 min de la recepción.", precio: "Desde $350.000 COP/noche", distancia: "15 min", icon: "🏨", color: "#fdf0f2" },
  { name: "Marriott Bogotá", category: "⭐⭐⭐⭐⭐", desc: "Internacional y confortable. Vista panorámica de la ciudad.", precio: "Desde $280.000 COP/noche", distancia: "20 min", icon: "🏩", color: "#f5eef8" },
  { name: "Hotel NH Collection", category: "⭐⭐⭐⭐", desc: "Excelente relación calidad-precio en zona norte.", precio: "Desde $180.000 COP/noche", distancia: "10 min", icon: "🏡", color: "#eef5ec" },
];
const RESTAURANTES = [
  { name: "El Cielo", tipo: "Gastronomía Molecular", desc: "Experiencia única de alta cocina colombiana. Reserva con anticipación.", icon: "🍽️" },
  { name: "Harry Sasson", tipo: "Cocina Internacional", desc: "Clásico bogotano de alta cocina. Perfecto para celebrar.", icon: "🥩" },
  { name: "Andrés DC", tipo: "Cocina Colombiana", desc: "La experiencia gastronómica más emblemática de Colombia.", icon: "🇨🇴" },
];
const TIPS = [
  { icon: "🌤️", title: "El clima en Bogotá", text: "Febrero puede ser soleado pero fresco. Lleva una chaqueta o chal para la noche. La temperatura oscila entre 7°C y 19°C." },
  { icon: "🚗", title: "Movilización", text: "Recomendamos InDriver, Uber o taxis de plataforma. Si deseas, solicita nuestro servicio de transporte en la confirmación." },
  { icon: "🎁", title: "Lista de regalos", text: "Tu presencia es nuestro mejor regalo. Si deseas obsequiarnos algo, tenemos una lista en El Corte Inglés Home y una cuenta bancaria disponible." },
  { icon: "📱", title: "Redes sociales", text: "Comparte tus fotos del día usando el hashtag #SofíaYAlejandro2026. ¡Queremos verlos desde tu perspectiva!" },
  { icon: "💃", title: "La fiesta", text: "¡Ven con energía! Habrá música en vivo, DJ, barra libre y mucha diversión hasta las 2 AM." },
  { icon: "📅", title: "Confirma antes del", text: "15 de Enero de 2026 es nuestra fecha límite para confirmaciones. ¡Asegura tu lugar!" },
];

export default function RecomendacionesSection() {
  return (
    <section id="recomendaciones" className="py-24 px-6" style={{ background: "white" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-widest uppercase mb-3"
            style={{ color: "#9b7a8e", fontFamily: "'Lato', sans-serif", fontWeight: 300, letterSpacing: "0.25em" }}>
            Para que disfrutes al máximo
          </p>
          <h2 className="text-5xl md:text-6xl mb-4"
            style={{ fontFamily: "'Dancing Script', cursive", color: "#6b4c5e" }}>
            Recomendaciones
          </h2>
          <div className="section-divider" />
        </div>

        {/* Hoteles */}
        <div className="mb-20">
          <h3 className="text-3xl text-center mb-10" style={{ fontFamily: "'Playfair Display', serif", color: "#6b4c5e" }}>🏨 Dónde hospedarte</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {HOTELES.map((hotel) => (
              <div key={hotel.name} className="p-6 rounded-3xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{ background: hotel.color, border: "1.5px solid rgba(232,180,184,0.25)" }}>
                <div className="text-4xl mb-4">{hotel.icon}</div>
                <div className="text-sm mb-2" style={{ color: "#c9787f" }}>{hotel.category}</div>
                <h4 className="text-lg font-semibold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: "#6b4c5e" }}>{hotel.name}</h4>
                <p className="text-sm mb-4" style={{ color: "#9b7a8e", fontFamily: "'Lato', sans-serif", fontWeight: 300, lineHeight: 1.7 }}>{hotel.desc}</p>
                <p className="text-xs mb-3" style={{ color: "#9b7a8e", fontFamily: "'Lato', sans-serif" }}>📍 {hotel.distancia} del evento</p>
                <div className="pt-3 text-sm font-semibold"
                  style={{ borderTop: "1px solid rgba(232,180,184,0.3)", color: "#c9787f", fontFamily: "'Lato', sans-serif" }}>
                  {hotel.precio}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Restaurantes */}
        <div className="mb-20">
          <h3 className="text-3xl text-center mb-10" style={{ fontFamily: "'Playfair Display', serif", color: "#6b4c5e" }}>🍽️ Dónde comer (antes del gran día)</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {RESTAURANTES.map((rest) => (
              <div key={rest.name} className="p-6 rounded-3xl text-center"
                style={{ background: "#fdf6ee", border: "1.5px solid #f0d4d8" }}>
                <div className="text-4xl mb-3">{rest.icon}</div>
                <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "#9b7a8e", fontFamily: "'Lato', sans-serif" }}>{rest.tipo}</p>
                <h4 className="text-xl mb-3" style={{ fontFamily: "'Playfair Display', serif", color: "#6b4c5e" }}>{rest.name}</h4>
                <p className="text-sm" style={{ color: "#9b7a8e", fontFamily: "'Lato', sans-serif", fontWeight: 300, lineHeight: 1.75 }}>{rest.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tips */}
        <div>
          <h3 className="text-3xl text-center mb-10" style={{ fontFamily: "'Playfair Display', serif", color: "#6b4c5e" }}>🌿 Tips útiles</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {TIPS.map((tip) => (
              <div key={tip.title} className="flex gap-4 p-5 rounded-2xl"
                style={{ background: "#fdf6ee", border: "1.5px solid #f0d4d8" }}>
                <span className="text-3xl flex-shrink-0">{tip.icon}</span>
                <div>
                  <h4 className="font-semibold mb-1" style={{ color: "#6b4c5e", fontFamily: "'Lato', sans-serif" }}>{tip.title}</h4>
                  <p className="text-sm" style={{ color: "#9b7a8e", fontFamily: "'Lato', sans-serif", fontWeight: 300, lineHeight: 1.7 }}>{tip.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
