export default function CeremoniaSection() {
  return (
    <section id="ceremonia" className="py-24 px-6"
      style={{ background: "linear-gradient(160deg, #f5eef8 0%, #eef5ec 50%, #f5eef8 100%)" }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-widest uppercase mb-3"
            style={{ color: "#9b7a8e", fontFamily: "'Lato', sans-serif", fontWeight: 300, letterSpacing: "0.25em" }}>
            El Gran Día
          </p>
          <h2 className="text-5xl md:text-6xl mb-4"
            style={{ fontFamily: "'Dancing Script', cursive", color: "#6b4c5e" }}>
            La Celebración
          </h2>
          <div className="section-divider" />
        </div>

        {/* Date */}
        <div className="text-center mb-16">
          <div className="inline-block px-12 py-10 rounded-3xl"
            style={{ background: "white", border: "1.5px solid #f0d4d8", boxShadow: "0 8px 40px rgba(232,180,184,0.15)" }}>
            <p className="text-8xl font-bold mb-1"
              style={{ fontFamily: "'Playfair Display', serif", color: "#c9787f", lineHeight: 1 }}>14</p>
            <p className="text-2xl uppercase tracking-widest mb-1"
              style={{ fontFamily: "'Lato', sans-serif", color: "#6b4c5e", fontWeight: 300 }}>Febrero</p>
            <p className="text-lg" style={{ fontFamily: "'Playfair Display', serif", color: "#9b7a8e" }}>2026</p>
          </div>
        </div>

        {/* Events */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {[
            { emoji: "⛪", title: "Ceremonia", time: "4:00 PM", place: "Iglesia de Santa Bárbara", address: "Cra. 7 #74-21, Bogotá", mapsUrl: "https://maps.google.com/?q=Iglesia+Santa+Barbara+Bogota", bg: "linear-gradient(135deg, #fdf0f2, white)", border: "#f0d4d8" },
            { emoji: "🥂", title: "Recepción", time: "7:00 PM", place: "Hacienda La Esperanza", address: "Autopista Norte Km 12, Bogotá", mapsUrl: "https://maps.google.com/?q=Autopista+Norte+Km+12+Bogota", bg: "linear-gradient(135deg, #f0f5ee, white)", border: "#d4e8d0" },
          ].map((ev) => (
            <div key={ev.title} className="p-8 rounded-3xl text-center transition-shadow hover:shadow-lg"
              style={{ background: ev.bg, border: `1.5px solid ${ev.border}` }}>
              <div className="text-5xl mb-4">{ev.emoji}</div>
              <h3 className="text-2xl mb-1" style={{ fontFamily: "'Playfair Display', serif", color: "#6b4c5e" }}>{ev.title}</h3>
              <p className="text-sm tracking-widest uppercase mb-4" style={{ color: "#9b7a8e", fontFamily: "'Lato', sans-serif" }}>{ev.time}</p>
              <p className="text-lg mb-1" style={{ color: "#6b4c5e", fontFamily: "'Playfair Display', serif" }}>{ev.place}</p>
              <p className="text-sm mb-4" style={{ color: "#9b7a8e", fontFamily: "'Lato', sans-serif", fontWeight: 300 }}>{ev.address}</p>
              <a href={ev.mapsUrl} target="_blank" rel="noopener noreferrer"
                className="text-xs tracking-widest uppercase transition-colors hover:opacity-70"
                style={{ color: "#c9787f", fontFamily: "'Lato', sans-serif" }}>
                Ver en mapa →
              </a>
            </div>
          ))}
        </div>

        {/* Dress Code */}
        <div className="max-w-3xl mx-auto p-10 rounded-3xl text-center relative overflow-hidden mb-16"
          style={{ background: "linear-gradient(135deg, #fdf0f2, #f5eef8)", border: "1.5px solid #e8d4f0" }}>
          {/* Top floral bar */}
          <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
            style={{ background: "linear-gradient(90deg, #e8b4b8, #c4b5d4, #a8c5a0, #c4b5d4, #e8b4b8)" }} />

          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-xl">🌸</span>
            <p className="text-xs tracking-widest uppercase" style={{ color: "#9b7a8e", fontFamily: "'Lato', sans-serif", letterSpacing: "0.2em" }}>Importante</p>
            <span className="text-xl">🌸</span>
          </div>

          <h3 className="text-3xl md:text-4xl mb-3" style={{ fontFamily: "'Dancing Script', cursive", color: "#6b4c5e" }}>
            Código de Vestimenta
          </h3>
          <div className="text-3xl font-bold mb-4 tracking-widest uppercase"
            style={{ fontFamily: "'Playfair Display', serif", color: "#c9787f" }}>Formal</div>

          <p className="mb-8 max-w-lg mx-auto"
            style={{ color: "#7a5c6e", fontFamily: "'Lato', sans-serif", fontWeight: 300, lineHeight: 1.85 }}>
            Queremos que todos luzcan espléndidos en este día tan especial. Te pedimos asistir con atuendo formal.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            {[
              { icon: "🤵", label: "Caballeros", desc: "Traje oscuro o claro con corbata. Smoking bienvenido." },
              { icon: "👗", label: "Damas", desc: "Vestido de noche o vestido formal. Por favor evitar el color blanco." },
            ].map((item) => (
              <div key={item.label} className="p-5 rounded-2xl"
                style={{ background: "rgba(255,255,255,0.7)", border: "1px solid rgba(232,180,184,0.3)" }}>
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "#9b7a8e", fontFamily: "'Lato', sans-serif" }}>{item.label}</p>
                <p className="text-sm" style={{ color: "#7a5c6e", fontFamily: "'Lato', sans-serif", fontWeight: 300, lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl" style={{ background: "rgba(255,220,220,0.25)", border: "1px solid rgba(232,180,184,0.4)" }}>
            <p className="text-sm" style={{ color: "#b06070", fontFamily: "'Lato', sans-serif", fontWeight: 300 }}>
              🚫 Por favor evitar vestimenta casual, jeans o tenis. Los colores blanco e ivori están reservados para la novia.
            </p>
          </div>
        </div>

        {/* Program */}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-3xl text-center mb-10" style={{ fontFamily: "'Dancing Script', cursive", color: "#6b4c5e" }}>El programa del día</h3>
          <div className="space-y-3">
            {[
              { time: "3:30 PM", event: "Recepción de invitados en la iglesia", icon: "🌿" },
              { time: "4:00 PM", event: "Ceremonia religiosa", icon: "⛪" },
              { time: "5:30 PM", event: "Cocktail de bienvenida", icon: "🥂" },
              { time: "7:00 PM", event: "Apertura de la recepción y cena", icon: "🍽️" },
              { time: "8:30 PM", event: "Primer baile y celebración", icon: "💃" },
              { time: "2:00 AM", event: "Cierre de la fiesta", icon: "🌙" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-5 p-4 rounded-2xl transition-colors hover:bg-white"
                style={{ border: "1px solid transparent" }}>
                <span className="text-xl w-8 text-center">{item.icon}</span>
                <div className="text-sm font-semibold w-20 flex-shrink-0" style={{ color: "#c9787f", fontFamily: "'Lato', sans-serif" }}>{item.time}</div>
                <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#e8b4b8" }} />
                <div className="text-sm" style={{ color: "#7a5c6e", fontFamily: "'Lato', sans-serif", fontWeight: 300 }}>{item.event}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
