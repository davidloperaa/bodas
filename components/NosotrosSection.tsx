export default function NosotrosSection() {
  return (
    <section id="nosotros" className="py-24 px-6" style={{ background: "#fdf8f0" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p
            className="text-xs tracking-widest uppercase mb-4"
            style={{ color: "#c9a96e", fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
          >
            Nuestra Historia
          </p>
          <h2
            className="text-5xl md:text-6xl mb-6"
            style={{ fontFamily: "'Dancing Script', cursive", color: "#2c1810" }}
          >
            Los Novios
          </h2>
          <div className="section-divider" />
        </div>

        {/* Profiles */}
        <div className="grid md:grid-cols-2 gap-16 mb-24">
          {/* Sofía */}
          <div className="text-center">
            <div
              className="w-64 h-64 mx-auto rounded-full mb-8 overflow-hidden border-4"
              style={{ borderColor: "#c9a96e", background: "#e8d5b0" }}
            >
              <div
                className="w-full h-full flex items-center justify-center text-8xl"
                style={{ background: "linear-gradient(135deg, #e8d5b0, #c9a96e)" }}
              >
                <span style={{ fontFamily: "'Dancing Script', cursive", color: "white", fontSize: "5rem" }}>S</span>
              </div>
            </div>
            <h3
              className="text-4xl mb-2"
              style={{ fontFamily: "'Dancing Script', cursive", color: "#2c1810" }}
            >
              Sofía Martínez
            </h3>
            <p
              className="text-sm tracking-widest uppercase mb-4"
              style={{ color: "#c9a96e", fontFamily: "'Lato', sans-serif" }}
            >
              La Novia
            </p>
            <p
              className="leading-relaxed"
              style={{ color: "#6b4c3b", fontFamily: "'Lato', sans-serif", fontWeight: 300, fontSize: "0.95rem" }}
            >
              Diseñadora de interiores con alma de artista, Sofía tiene la capacidad de transformar
              cualquier espacio en un refugio de belleza. Le apasiona el café, los atardeceres desde
              las montañas, y encontrar historias en cada rincón del mundo. Su sonrisa ilumina cada
              habitación en la que entra.
            </p>
          </div>

          {/* Alejandro */}
          <div className="text-center">
            <div
              className="w-64 h-64 mx-auto rounded-full mb-8 overflow-hidden border-4"
              style={{ borderColor: "#c9a96e", background: "#e8d5b0" }}
            >
              <div
                className="w-full h-full flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #6b3a2a, #c9a96e)" }}
              >
                <span style={{ fontFamily: "'Dancing Script', cursive", color: "white", fontSize: "5rem" }}>A</span>
              </div>
            </div>
            <h3
              className="text-4xl mb-2"
              style={{ fontFamily: "'Dancing Script', cursive", color: "#2c1810" }}
            >
              Alejandro García
            </h3>
            <p
              className="text-sm tracking-widest uppercase mb-4"
              style={{ color: "#c9a96e", fontFamily: "'Lato', sans-serif" }}
            >
              El Novio
            </p>
            <p
              className="leading-relaxed"
              style={{ color: "#6b4c3b", fontFamily: "'Lato', sans-serif", fontWeight: 300, fontSize: "0.95rem" }}
            >
              Ingeniero por vocación, aventurero por naturaleza. Alejandro cree que la vida se
              mide en experiencias, no en años. Ama la música en vivo, cocinar para quienes más
              quiere, y los madrugones para ver salir el sol en la montaña. Encontró en Sofía
              su compañera perfecta de aventuras.
            </p>
          </div>
        </div>

        {/* Story Timeline */}
        <div
          className="card-elegant p-12 max-w-3xl mx-auto"
          style={{ background: "white" }}
        >
          <h3
            className="text-4xl text-center mb-10"
            style={{ fontFamily: "'Dancing Script', cursive", color: "#2c1810" }}
          >
            Cómo nos encontramos
          </h3>

          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px"
              style={{ background: "linear-gradient(to bottom, transparent, #c9a96e, transparent)" }}
            />

            {[
              {
                year: "2019",
                icon: "✦",
                title: "El primer encuentro",
                text: "Una tarde de lluvia en una librería del centro de Bogotá. Sus manos rozaron al tomar el mismo libro. \"Cien años de soledad\" fue la excusa perfecta para una conversación que duró hasta que cerraron las puertas.",
                side: "left",
              },
              {
                year: "2020",
                icon: "♡",
                title: "El primer \"te quiero\"",
                text: "En el balcón de un apartamento prestado, con la ciudad de fondo y una lluvia de estrellas fugaces. Alejandro, nervioso como nunca, pronunció esas dos palabras que cambiarían su historia para siempre.",
                side: "right",
              },
              {
                year: "2023",
                icon: "◈",
                title: "La propuesta",
                text: "En el Parque Natural Tayrona, al amanecer, con los pies en el agua y el Caribe como testigo. Alejandro sacó un anillo escondido en una concha de mar y preguntó lo que ya sabían los dos: ¿Quieres ser mi para siempre?",
                side: "left",
              },
              {
                year: "2026",
                icon: "◆",
                title: "El gran día",
                text: "Y ahora, rodeados de quienes más amamos, están listos para dar el siguiente paso. Una historia de amor que apenas comienza su capítulo más bello.",
                side: "right",
              },
            ].map((event, i) => (
              <div key={i} className={`relative flex items-start mb-12 last:mb-0 ${event.side === "right" ? "flex-row-reverse" : ""}`}>
                <div className={`w-1/2 ${event.side === "right" ? "pl-10 text-left" : "pr-10 text-right"}`}>
                  <p
                    className="text-xs tracking-widest uppercase mb-1"
                    style={{ color: "#c9a96e", fontFamily: "'Lato', sans-serif" }}
                  >
                    {event.year}
                  </p>
                  <h4
                    className="text-xl mb-2"
                    style={{ fontFamily: "'Playfair Display', serif", color: "#2c1810" }}
                  >
                    {event.title}
                  </h4>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#6b4c3b", fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                  >
                    {event.text}
                  </p>
                </div>
                <div
                  className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center z-10"
                  style={{ background: "white", border: "2px solid #c9a96e", color: "#c9a96e" }}
                >
                  {event.icon}
                </div>
                <div className="w-1/2" />
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="text-center mt-20">
          <p
            className="text-2xl md:text-3xl italic max-w-2xl mx-auto"
            style={{ fontFamily: "'Playfair Display', serif", color: "#6b4c3b", lineHeight: 1.8 }}
          >
            &ldquo;El amor no consiste en mirarse el uno al otro,
            sino en mirar juntos en la misma dirección.&rdquo;
          </p>
          <p
            className="text-sm tracking-widest uppercase mt-4"
            style={{ color: "#c9a96e", fontFamily: "'Lato', sans-serif" }}
          >
            — Antoine de Saint-Exupéry
          </p>
        </div>
      </div>
    </section>
  );
}
