"use client";
import { useEffect, useState } from "react";

const WEDDING_DATE = new Date("2026-02-14T16:00:00");

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calc = () => {
      const now = new Date();
      const diff = WEDDING_DATE.getTime() - now.getTime();
      if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      };
    };
    setTimeLeft(calc());
    const interval = setInterval(() => setTimeLeft(calc()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-6 justify-center flex-wrap">
      {[
        { value: timeLeft.days, label: "Días" },
        { value: timeLeft.hours, label: "Horas" },
        { value: timeLeft.minutes, label: "Minutos" },
        { value: timeLeft.seconds, label: "Segundos" },
      ].map((item) => (
        <div key={item.label} className="text-center">
          <div
            className="text-5xl font-bold tabular-nums"
            style={{ fontFamily: "'Playfair Display', serif", color: "#c9a96e" }}
          >
            {String(item.value).padStart(2, "0")}
          </div>
          <div
            className="text-xs tracking-widest uppercase mt-1"
            style={{ color: "rgba(255,255,255,0.8)", fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
          >
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #2c1810 0%, #4a2c1a 30%, #6b3a2a 60%, #2c1810 100%)",
      }}
    >
      {/* Decorative overlay pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a96e' fill-opacity='1'%3E%3Cpath d='M30 0l2 28-2 2-2-2zm0 60l2-28-2-2-2 2zM0 30l28 2 2-2-2-2zm60 0l-28 2-2-2 2-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Soft vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.4) 100%)",
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Top decoration */}
        <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in-up">
          <div style={{ width: "60px", height: "1px", background: "#c9a96e" }} />
          <span style={{ color: "#c9a96e", fontSize: "1.2rem" }}>✦</span>
          <div style={{ width: "60px", height: "1px", background: "#c9a96e" }} />
        </div>

        <p
          className="text-sm tracking-widest uppercase mb-4 animate-fade-in-up animate-delay-200"
          style={{ color: "rgba(255,255,255,0.7)", fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
        >
          Nos complace invitarte a celebrar
        </p>

        <h1
          className="text-7xl md:text-9xl mb-4 animate-fade-in-up animate-delay-200"
          style={{ fontFamily: "'Dancing Script', cursive", color: "white" }}
        >
          Sofía
        </h1>

        <div
          className="text-3xl md:text-4xl mb-4 animate-fade-in-up animate-delay-200"
          style={{ color: "#c9a96e", fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}
        >
          &amp;
        </div>

        <h1
          className="text-7xl md:text-9xl mb-8 animate-fade-in-up animate-delay-400"
          style={{ fontFamily: "'Dancing Script', cursive", color: "white" }}
        >
          Alejandro
        </h1>

        <div className="section-divider mb-8 animate-fade-in-up animate-delay-400" />

        <p
          className="text-xl md:text-2xl mb-10 animate-fade-in-up animate-delay-400"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            color: "rgba(255,255,255,0.9)",
          }}
        >
          14 de Febrero, 2026 · Bogotá, Colombia
        </p>

        <div className="mb-12 animate-fade-in-up animate-delay-600">
          <Countdown />
        </div>

        <a
          href="#confirmacion"
          className="btn-gold animate-fade-in-up animate-delay-600"
          style={{ fontFamily: "'Lato', sans-serif" }}
        >
          Confirmar Asistencia
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Lato', sans-serif" }}>
          Scroll
        </span>
        <div
          className="w-px h-12"
          style={{ background: "linear-gradient(to bottom, rgba(201,169,110,0.8), transparent)" }}
        />
      </div>
    </section>
  );
}
