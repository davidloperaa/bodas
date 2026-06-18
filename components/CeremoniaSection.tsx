export default function CeremoniaSection() {
  return (
    <section
      id="ceremonia"
      className="py-24 px-6"
      style={{ background: "linear-gradient(135deg, #2c1810 0%, #4a2c1a 100%)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-xs tracking-widest uppercase mb-4"
            style={{ color: "rgba(201,169,110,0.8)", fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
          >
            El Gran Día
          </p>
          <h2
            className="text-5xl md:text-6xl mb-6"
            style={{ fontFamily: "'Dancing Script', cursive", color: "white" }}
          >
            La Celebración
          </h2>
          <div className="section-divider" />
        </div>

        {/* Date highlight */}
        <div className="text-center mb-16">
          <div
            className="inline-block px-10 py-8 rounded-2xl"
            style={{ border: "1px solid rgba(201,169,110,0.3)", background: "rgba(255,255,255,0.05)" }}
          >
            <p
              className="text-8xl font-bold mb-2"
              style={{ fontFamily: "'Playfair Display', serif", color: "#c9a96e" }}
            >
              14
            </p>
            <p
              className="text-3xl uppercase tracking-widest mb-2"
              style={{ fontFamily: "'Lato', sans-serif", color: "white", fontWeight: 300 }}
            >
              Febrero
            </p>
            <p
              className="text-xl"
              style={{ fontFamily: "'Playfair Display', serif", color: "rgba(255,255,255,0.7)" }}
            >
              2026
            </p>
          </div>
        </div>

        {/* Events */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Ceremony */}
          <div
            className="p-8 rounded-2xl text-center"
            style={{ border: "1px solid rgba(201,169,110,0.3)", background: "rgba(255,255,255,0.05)" }}
          >
            <div className="text-4xl mb-4">⛪</div>
            <h3
              className="text-2xl mb-2"
              style={{ fontFamily: "'Playfair Display', serif", color: "#c9a96e" }}
            >
              Ceremonia
            </h3>
            <p
              className="text-sm tracking-widest uppercase mb-4"
              style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Lato', sans-serif" }}
            >
              4:00 PM
            </p>
            <p
              className="text-lg mb-2"
              style={{ color: "white", fontFamily: "'Playfair Display', serif" }}
            >
              Iglesia de Santa Bárbara
            </p>
            <p
              className="text-sm"
              style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
            >
              Cra. 7 #74-21, Bogotá
            </p>
            <a
              href="https://maps.google.com/?q=Iglesia+Santa+Barbara+Bogota"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-xs tracking-widest uppercase"
              style={{ color: "#c9a96e" }}
            >
              Ver en mapa →
            </a>
          </div>

          {/* Reception */}
          <div
            className="p-8 rounded-2xl text-center"
            style={{ border: "1px solid rgba(201,169,110,0.3)", background: "rgba(255,255,255,0.05)" }}
          >
            <div className="text-4xl mb-4">🥂</div>
            <h3
              className="text-2xl mb-2"
              style={{ fontFamily: "'Playfair Display', serif", color: "#c9a96e" }}
            >
              Recepción
            </h3>
            <p
              className="text-sm tracking-widest uppercase mb-4"
              style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Lato', sans-serif" }}
            >
              7:00 PM
            </p>
            <p
              className="text-lg mb-2"
              style={{ color: "white", fontFamily: "'Playfair Display', serif" }}
            >
              Hacienda La Esperanza
            </p>
            <p
              className="text-sm"
              style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
            >
              Autopista Norte Km 12, Bogotá
            </p>
            <a
              href="https://maps.google.com/?q=Autopista+Norte+Km+12+Bogota"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-xs tracking-widest uppercase"
              style={{ color: "#c9a96e" }}
            >
              Ver en mapa →
            </a>
          </div>
        </div>

        {/* Dress Code — IMPORTANT */}
        <div
          className="max-w-3xl mx-auto p-10 rounded-2xl text-center relative overflow-hidden"
          style={{ border: "2px solid #c9a96e", background: "rgba(201,169,110,0.08)" }}
        >
          <div
            className="absolute top-0 left-0 right-0 h-1"
            style={{ background: "linear-gradient(90deg, transparent, #c9a96e, transparent)" }}
          />
          <div className="flex items-center justify-center gap-3 mb-6">
            <span style={{ color: "#c9a96e", fontSize: "1.5rem" }}>◆</span>
            <p
              className="text-xs tracking-widest uppercase"
              style={{ color: "#c9a96e", fontFamily: "'Lato', sans-serif" }}
            >
              Importante
            </p>
            <span style={{ color: "#c9a96e", fontSize: "1.5rem" }}>◆</span>
          </div>

          <h3
            className="text-3xl md:text-4xl mb-4"
            style={{ fontFamily: "'Dancing Script', cursive", color: "white" }}
          >
            Código de Vestimenta
          </h3>

          <div
            className="text-4xl font-bold mb-4 tracking-widest uppercase"
            style={{ fontFamily: "'Playfair Display', serif", color: "#c9a96e" }}
          >
            Formal
          </div>

          <p
            className="mb-8"
            style={{ color: "rgba(255,255,255,0.8)", fontFamily: "'Lato', sans-serif", fontWeight: 300, lineHeight: 1.8 }}
          >
            Queremos que todos luzcan espléndidos en este día tan especial.
            Te pedimos asistir con atuendo formal. Los caballeros con traje y corbata,
            las damas con vestido de noche o vestido formal.
          </p>

          <div className="grid grid-cols-2 gap-6">
            <div
              className="p-6 rounded-xl"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(201,169,110,0.2)" }}
            >
              <p
                className="text-sm tracking-widest uppercase mb-3"
                style={{ color: "#c9a96e", fontFamily: "'Lato', sans-serif" }}
              >
                Caballeros
              </p>
              <p
                className="text-sm"
                style={{ color: "rgba(255,255,255,0.7)", fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
              >
                Traje oscuro o claro con corbata. Smoking bienvenido.
              </p>
            </div>
            <div
              className="p-6 rounded-xl"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(201,169,110,0.2)" }}
            >
              <p
                className="text-sm tracking-widest uppercase mb-3"
                style={{ color: "#c9a96e", fontFamily: "'Lato', sans-serif" }}
              >
                Damas
              </p>
              <p
                className="text-sm"
                style={{ color: "rgba(255,255,255,0.7)", fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
              >
                Vestido de noche o vestido formal. Por favor evitar el color blanco.
              </p>
            </div>
          </div>

          <div
            className="mt-6 p-4 rounded-xl"
            style={{ background: "rgba(255,100,100,0.1)", border: "1px solid rgba(255,100,100,0.2)" }}
          >
            <p
              className="text-sm"
              style={{ color: "rgba(255,200,200,0.9)", fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
            >
              🚫 Por favor evitar vestimenta casual, jeans o tenis.
              Los colores blanco e ivori están reservados para la novia.
            </p>
          </div>
        </div>

        {/* Timeline of the day */}
        <div className="max-w-2xl mx-auto mt-16">
          <h3
            className="text-3xl text-center mb-10"
            style={{ fontFamily: "'Dancing Script', cursive", color: "white" }}
          >
            El programa del día
          </h3>
          <div className="space-y-4">
            {[
              { time: "3:30 PM", event: "Recepción de invitados en la iglesia" },
              { time: "4:00 PM", event: "Ceremonia religiosa" },
              { time: "5:30 PM", event: "Cocktail de bienvenida" },
              { time: "7:00 PM", event: "Apertura de la recepción y cena" },
              { time: "8:30 PM", event: "Primer baile y celebración" },
              { time: "2:00 AM", event: "Cierre de la fiesta" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-6">
                <div
                  className="text-right w-24 flex-shrink-0 text-sm font-bold"
                  style={{ color: "#c9a96e", fontFamily: "'Lato', sans-serif" }}
                >
                  {item.time}
                </div>
                <div
                  className="w-3 h-3 rounded-full flex-shrink-0"
                  style={{ background: "#c9a96e" }}
                />
                <div
                  className="text-sm"
                  style={{ color: "rgba(255,255,255,0.8)", fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                >
                  {item.event}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
