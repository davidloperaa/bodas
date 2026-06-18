"use client";
import { useState } from "react";

interface FormData {
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  asistencia: "si" | "no";
  acompanantes: string;
  nombres_acompanantes: string;
  necesita_transporte: boolean;
  punto_recogida: string;
  restricciones_alimentarias: string;
  mensaje: string;
}

const INITIAL: FormData = {
  nombre: "",
  apellido: "",
  email: "",
  telefono: "",
  asistencia: "si",
  acompanantes: "0",
  nombres_acompanantes: "",
  necesita_transporte: false,
  punto_recogida: "",
  restricciones_alimentarias: "",
  mensaje: "",
};

const PUNTOS_RECOGIDA = [
  "Centro Bogotá (Av. El Dorado)",
  "Norte (Calle 100 con Autopista)",
  "Chía - Parque Principal",
  "Salitre (CAN)",
  "Otro punto acordado",
];

export default function RSVPSection() {
  const [form, setForm] = useState<FormData>(INITIAL);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, acompanantes: Number(form.acompanantes) }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error || "Error al enviar la confirmación");
        setStatus("error");
      } else {
        setStatus("success");
        setForm(INITIAL);
      }
    } catch {
      setErrorMsg("Error de conexión. Por favor intenta nuevamente.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <section id="confirmacion" className="py-24 px-6" style={{ background: "#fdf8f0" }}>
        <div className="max-w-2xl mx-auto text-center">
          <div
            className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 text-5xl"
            style={{ background: "linear-gradient(135deg, #c9a96e, #e8d5b0)" }}
          >
            ✓
          </div>
          <h2
            className="text-5xl mb-4"
            style={{ fontFamily: "'Dancing Script', cursive", color: "#2c1810" }}
          >
            ¡Gracias!
          </h2>
          <p
            className="text-lg mb-8"
            style={{ color: "#6b4c3b", fontFamily: "'Lato', sans-serif", fontWeight: 300, lineHeight: 1.8 }}
          >
            Tu confirmación fue recibida. Estamos muy emocionados de compartir este día especial contigo.
            Pronto recibirás más detalles.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="btn-outline-gold"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            Enviar otra confirmación
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="confirmacion" className="py-24 px-6" style={{ background: "#fdf8f0" }}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p
            className="text-xs tracking-widest uppercase mb-4"
            style={{ color: "#c9a96e", fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
          >
            Confirma tu Presencia
          </p>
          <h2
            className="text-5xl md:text-6xl mb-6"
            style={{ fontFamily: "'Dancing Script', cursive", color: "#2c1810" }}
          >
            RSVP
          </h2>
          <div className="section-divider mb-6" />
          <p
            className="max-w-lg mx-auto"
            style={{ color: "#6b4c3b", fontFamily: "'Lato', sans-serif", fontWeight: 300, lineHeight: 1.8 }}
          >
            Por favor confirma tu asistencia antes del <strong>15 de Enero de 2026</strong>.
            Tu presencia es el regalo más especial que nos puedes dar.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="card-elegant p-8 md:p-12">
          {/* Asistencia */}
          <div className="mb-8">
            <p
              className="text-sm tracking-widest uppercase mb-4"
              style={{ color: "#2c1810", fontFamily: "'Lato', sans-serif" }}
            >
              ¿Podrás acompañarnos? *
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "si", label: "¡Con mucho gusto!", icon: "🎉" },
                { value: "no", label: "Lo siento, no podré", icon: "😢" },
              ].map((opt) => (
                <label
                  key={opt.value}
                  className="flex flex-col items-center p-6 rounded-xl cursor-pointer transition-all duration-300"
                  style={{
                    border: `2px solid ${form.asistencia === opt.value ? "#c9a96e" : "#e8d5b0"}`,
                    background: form.asistencia === opt.value ? "rgba(201,169,110,0.08)" : "white",
                  }}
                >
                  <input
                    type="radio"
                    name="asistencia"
                    value={opt.value}
                    checked={form.asistencia === opt.value}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <span className="text-3xl mb-2">{opt.icon}</span>
                  <span
                    className="text-sm text-center"
                    style={{
                      fontFamily: "'Lato', sans-serif",
                      color: form.asistencia === opt.value ? "#c9a96e" : "#6b4c3b",
                      fontWeight: form.asistencia === opt.value ? 700 : 300,
                    }}
                  >
                    {opt.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Nombre */}
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                className="block text-xs tracking-widest uppercase mb-2"
                style={{ color: "#2c1810", fontFamily: "'Lato', sans-serif" }}
              >
                Nombre *
              </label>
              <input
                type="text"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                required
                placeholder="Tu nombre"
                className="input-elegant"
              />
            </div>
            <div>
              <label
                className="block text-xs tracking-widest uppercase mb-2"
                style={{ color: "#2c1810", fontFamily: "'Lato', sans-serif" }}
              >
                Apellido *
              </label>
              <input
                type="text"
                name="apellido"
                value={form.apellido}
                onChange={handleChange}
                required
                placeholder="Tu apellido"
                className="input-elegant"
              />
            </div>
          </div>

          {/* Contacto */}
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                className="block text-xs tracking-widest uppercase mb-2"
                style={{ color: "#2c1810", fontFamily: "'Lato', sans-serif" }}
              >
                Correo Electrónico
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="correo@ejemplo.com"
                className="input-elegant"
              />
            </div>
            <div>
              <label
                className="block text-xs tracking-widest uppercase mb-2"
                style={{ color: "#2c1810", fontFamily: "'Lato', sans-serif" }}
              >
                Teléfono / WhatsApp
              </label>
              <input
                type="tel"
                name="telefono"
                value={form.telefono}
                onChange={handleChange}
                placeholder="+57 300 000 0000"
                className="input-elegant"
              />
            </div>
          </div>

          {/* Acompañantes */}
          {form.asistencia === "si" && (
            <>
              <div className="mb-4">
                <label
                  className="block text-xs tracking-widest uppercase mb-2"
                  style={{ color: "#2c1810", fontFamily: "'Lato', sans-serif" }}
                >
                  Número de acompañantes (sin contarte a ti)
                </label>
                <select
                  name="acompanantes"
                  value={form.acompanantes}
                  onChange={handleChange}
                  className="input-elegant"
                >
                  {[0, 1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n}>
                      {n === 0 ? "Asistiré solo/a" : `${n} acompañante${n > 1 ? "s" : ""}`}
                    </option>
                  ))}
                </select>
              </div>

              {Number(form.acompanantes) > 0 && (
                <div className="mb-4">
                  <label
                    className="block text-xs tracking-widest uppercase mb-2"
                    style={{ color: "#2c1810", fontFamily: "'Lato', sans-serif" }}
                  >
                    Nombre(s) de tus acompañantes
                  </label>
                  <textarea
                    name="nombres_acompanantes"
                    value={form.nombres_acompanantes}
                    onChange={handleChange}
                    placeholder="Ej: María García, Juan López"
                    rows={2}
                    className="input-elegant"
                    style={{ resize: "vertical" }}
                  />
                </div>
              )}

              {/* Transporte */}
              <div
                className="p-6 rounded-xl mb-4"
                style={{ background: "rgba(201,169,110,0.05)", border: "1px solid #e8d5b0" }}
              >
                <label className="flex items-start gap-4 cursor-pointer">
                  <div className="relative mt-1">
                    <input
                      type="checkbox"
                      name="necesita_transporte"
                      checked={form.necesita_transporte}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <div
                      className="w-6 h-6 rounded flex items-center justify-center transition-colors"
                      style={{
                        background: form.necesita_transporte ? "#c9a96e" : "white",
                        border: `2px solid ${form.necesita_transporte ? "#c9a96e" : "#e8d5b0"}`,
                      }}
                    >
                      {form.necesita_transporte && <span className="text-white text-xs font-bold">✓</span>}
                    </div>
                  </div>
                  <div>
                    <p
                      className="font-bold mb-1"
                      style={{ color: "#2c1810", fontFamily: "'Lato', sans-serif" }}
                    >
                      Necesito transporte al lugar de la recepción 🚌
                    </p>
                    <p
                      className="text-sm"
                      style={{ color: "#6b4c3b", fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                    >
                      Pondremos a disposición buses desde varios puntos de Bogotá.
                    </p>
                  </div>
                </label>

                {form.necesita_transporte && (
                  <div className="mt-4">
                    <label
                      className="block text-xs tracking-widest uppercase mb-2"
                      style={{ color: "#2c1810", fontFamily: "'Lato', sans-serif" }}
                    >
                      Punto de recogida preferido
                    </label>
                    <select
                      name="punto_recogida"
                      value={form.punto_recogida}
                      onChange={handleChange}
                      className="input-elegant"
                    >
                      <option value="">Selecciona un punto</option>
                      {PUNTOS_RECOGIDA.map((p) => (
                        <option key={p} value={p}>{p}</option>
                      ))}
                    </select>
                  </div>
                )}
              </div>

              {/* Restricciones alimentarias */}
              <div className="mb-4">
                <label
                  className="block text-xs tracking-widest uppercase mb-2"
                  style={{ color: "#2c1810", fontFamily: "'Lato', sans-serif" }}
                >
                  Restricciones alimentarias o alergias
                </label>
                <input
                  type="text"
                  name="restricciones_alimentarias"
                  value={form.restricciones_alimentarias}
                  onChange={handleChange}
                  placeholder="Ej: Vegetariano, alergia al mariscos, sin gluten..."
                  className="input-elegant"
                />
              </div>
            </>
          )}

          {/* Mensaje */}
          <div className="mb-8">
            <label
              className="block text-xs tracking-widest uppercase mb-2"
              style={{ color: "#2c1810", fontFamily: "'Lato', sans-serif" }}
            >
              Mensaje para los novios (opcional)
            </label>
            <textarea
              name="mensaje"
              value={form.mensaje}
              onChange={handleChange}
              placeholder="Escríbenos algo especial..."
              rows={3}
              className="input-elegant"
              style={{ resize: "vertical" }}
            />
          </div>

          {errorMsg && (
            <div
              className="mb-6 p-4 rounded-xl"
              style={{ background: "rgba(220,50,50,0.08)", border: "1px solid rgba(220,50,50,0.2)" }}
            >
              <p
                className="text-sm"
                style={{ color: "#c0392b", fontFamily: "'Lato', sans-serif" }}
              >
                {errorMsg}
              </p>
            </div>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="btn-gold w-full text-center"
            style={{ fontFamily: "'Lato', sans-serif", opacity: status === "loading" ? 0.7 : 1 }}
          >
            {status === "loading" ? "Enviando..." : "Confirmar Asistencia"}
          </button>
        </form>
      </div>
    </section>
  );
}
