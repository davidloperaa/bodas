function FloralBranch({ flip = false }: { flip?: boolean }) {
  return (
    <svg viewBox="0 0 200 60" width="200" height="60" fill="none"
      style={{ transform: flip ? "scaleX(-1)" : undefined, opacity: 0.65 }}>
      <path d="M10 50 Q60 20 190 30" stroke="#a8c5a0" strokeWidth="1.5" fill="none"/>
      <circle cx="50" cy="28" r="6" fill="#e8b4b8" opacity="0.7"/>
      <circle cx="55" cy="22" r="4" fill="#f7e4e6" opacity="0.8"/>
      <circle cx="44" cy="22" r="3.5" fill="#c4b5d4" opacity="0.6"/>
      <circle cx="95" cy="24" r="5" fill="#e8b4b8" opacity="0.65"/>
      <circle cx="100" cy="18" r="3.5" fill="#f7e4e6" opacity="0.75"/>
      <circle cx="88" cy="20" r="3" fill="#c4b5d4" opacity="0.5"/>
      <circle cx="145" cy="26" r="4.5" fill="#e8b4b8" opacity="0.55"/>
      <circle cx="150" cy="20" r="3" fill="#f7e4e6" opacity="0.7"/>
      <ellipse cx="60" cy="35" rx="8" ry="4" fill="#a8c5a0" opacity="0.4" transform="rotate(-20 60 35)"/>
      <ellipse cx="110" cy="32" rx="7" ry="3.5" fill="#a8c5a0" opacity="0.35" transform="rotate(-15 110 32)"/>
      <ellipse cx="160" cy="34" rx="6" ry="3" fill="#a8c5a0" opacity="0.3" transform="rotate(-10 160 34)"/>
    </svg>
  );
}

export default function NosotrosSection() {
  return (
    <section id="nosotros" className="py-24 px-6" style={{ background: "linear-gradient(180deg, #fdf6ee 0%, #fdf0f4 100%)" }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-xs tracking-widest uppercase mb-3"
            style={{ color: "#9b7a8e", fontFamily: "'Lato', sans-serif", fontWeight: 300, letterSpacing: "0.25em" }}>
            Nuestra Historia
          </p>
          <h2 className="text-5xl md:text-6xl mb-4"
            style={{ fontFamily: "'Dancing Script', cursive", color: "#6b4c5e" }}>
            Los Novios
          </h2>
          <div className="flex items-center justify-center gap-3">
            <FloralBranch flip />
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="3" fill="#c9a96e" opacity="0.8"/>
              {[0,72,144,216,288].map((d, i) => (
                <ellipse key={i} cx="10" cy="10" rx="2" ry="4.5" fill="#e8b4b8" opacity="0.7"
                  transform={`rotate(${d} 10 10) translate(0 -5.5)`}/>
              ))}
            </svg>
            <FloralBranch />
          </div>
        </div>

        {/* Profiles */}
        <div className="grid md:grid-cols-2 gap-16 mb-24">
          {[
            {
              initial: "S", name: "Sofía Martínez", role: "La Novia",
              grad: "linear-gradient(135deg, #f7e4e6, #e8b4b8)",
              text: "Diseñadora de interiores con alma de artista, Sofía tiene la capacidad de transformar cualquier espacio en un refugio de belleza. Le apasiona el café, los atardeceres desde las montañas, y encontrar historias en cada rincón del mundo. Su sonrisa ilumina cada habitación en la que entra.",
            },
            {
              initial: "A", name: "Alejandro García", role: "El Novio",
              grad: "linear-gradient(135deg, #deeadc, #a8c5a0)",
              text: "Ingeniero por vocación, aventurero por naturaleza. Alejandro cree que la vida se mide en experiencias, no en años. Ama la música en vivo, cocinar para quienes más quiere, y los madrugones para ver salir el sol en la montaña. Encontró en Sofía su compañera perfecta de aventuras.",
            },
          ].map((p) => (
            <div key={p.name} className="text-center">
              <div className="w-56 h-56 mx-auto rounded-full mb-6 flex items-center justify-center"
                style={{ background: p.grad, boxShadow: "0 8px 40px rgba(232,180,184,0.3)", border: "4px solid white" }}>
                <span style={{ fontFamily: "'Dancing Script', cursive", color: "white", fontSize: "5rem", textShadow: "0 2px 12px rgba(107,76,94,0.3)" }}>{p.initial}</span>
              </div>
              <h3 className="text-4xl mb-1" style={{ fontFamily: "'Dancing Script', cursive", color: "#6b4c5e" }}>{p.name}</h3>
              <p className="text-xs tracking-widest uppercase mb-4" style={{ color: "#c9787f", fontFamily: "'Lato', sans-serif" }}>{p.role}</p>
              <p className="leading-relaxed max-w-sm mx-auto" style={{ color: "#7a5c6e", fontFamily: "'Lato', sans-serif", fontWeight: 300, fontSize: "0.95rem", lineHeight: 1.8 }}>{p.text}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="card-floral p-10 md:p-14 max-w-3xl mx-auto">
          <h3 className="text-4xl text-center mb-10" style={{ fontFamily: "'Dancing Script', cursive", color: "#6b4c5e" }}>Cómo nos encontramos</h3>

          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px"
              style={{ background: "linear-gradient(to bottom, transparent, #e8b4b8 20%, #c4b5d4 80%, transparent)" }} />

            {[
              { year: "2019", icon: "🌸", title: "El primer encuentro", text: "Una tarde de lluvia en una librería del centro de Bogotá. Sus manos rozaron al tomar el mismo libro. \"Cien años de soledad\" fue la excusa perfecta para una conversación que duró hasta que cerraron las puertas.", side: "left" },
              { year: "2020", icon: "💕", title: "El primer \"te quiero\"", text: "En el balcón de un apartamento prestado, con la ciudad de fondo y una lluvia de estrellas fugaces. Alejandro, nervioso como nunca, pronunció esas dos palabras que cambiarían su historia para siempre.", side: "right" },
              { year: "2023", icon: "💍", title: "La propuesta", text: "En el Parque Natural Tayrona, al amanecer, con los pies en el agua y el Caribe como testigo. Alejandro sacó un anillo escondido en una concha de mar y preguntó lo que ya sabían los dos: ¿Quieres ser mi para siempre?", side: "left" },
              { year: "2026", icon: "🌹", title: "El gran día", text: "Y ahora, rodeados de quienes más amamos, están listos para dar el siguiente paso. Una historia de amor que apenas comienza su capítulo más bello.", side: "right" },
            ].map((event, i) => (
              <div key={i} className={`relative flex items-start mb-12 last:mb-0 ${event.side === "right" ? "flex-row-reverse" : ""}`}>
                <div className={`w-1/2 ${event.side === "right" ? "pl-10 text-left" : "pr-10 text-right"}`}>
                  <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "#c9787f", fontFamily: "'Lato', sans-serif" }}>{event.year}</p>
                  <h4 className="text-lg mb-2" style={{ fontFamily: "'Playfair Display', serif", color: "#6b4c5e" }}>{event.title}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: "#7a5c6e", fontFamily: "'Lato', sans-serif", fontWeight: 300, lineHeight: 1.75 }}>{event.text}</p>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center z-10 text-lg"
                  style={{ background: "white", border: "2px solid #e8b4b8", boxShadow: "0 2px 12px rgba(232,180,184,0.3)" }}>
                  {event.icon}
                </div>
                <div className="w-1/2" />
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="text-center mt-20">
          <p className="text-xl md:text-2xl italic max-w-xl mx-auto"
            style={{ fontFamily: "'Playfair Display', serif", color: "#9b7a8e", lineHeight: 1.9 }}>
            &ldquo;El amor no consiste en mirarse el uno al otro,<br/>sino en mirar juntos en la misma dirección.&rdquo;
          </p>
          <p className="text-xs tracking-widest uppercase mt-4" style={{ color: "#c4b5d4", fontFamily: "'Lato', sans-serif" }}>
            — Antoine de Saint-Exupéry
          </p>
        </div>
      </div>
    </section>
  );
}
