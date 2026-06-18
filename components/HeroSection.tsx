"use client";
import { useEffect, useState } from "react";

const WEDDING_DATE = new Date("2026-02-14T16:00:00");

function FloralCorner({ style }: { style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 140 140" style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="22" cy="22" r="9" fill="#e8b4b8" opacity="0.55"/>
      <circle cx="38" cy="12" r="5.5" fill="#f7e4e6" opacity="0.7"/>
      <circle cx="12" cy="38" r="5.5" fill="#f7e4e6" opacity="0.7"/>
      <circle cx="55" cy="18" r="4" fill="#c4b5d4" opacity="0.5"/>
      <circle cx="18" cy="55" r="4" fill="#c4b5d4" opacity="0.5"/>
      <circle cx="72" cy="26" r="3" fill="#a8c5a0" opacity="0.55"/>
      <circle cx="26" cy="72" r="3" fill="#a8c5a0" opacity="0.55"/>
      <circle cx="90" cy="32" r="2.5" fill="#e8b4b8" opacity="0.35"/>
      <circle cx="32" cy="90" r="2.5" fill="#e8b4b8" opacity="0.35"/>
      <path d="M22 22 Q45 10 60 32" stroke="#e8b4b8" strokeWidth="1.2" opacity="0.4" fill="none"/>
      <path d="M22 22 Q10 45 32 60" stroke="#e8b4b8" strokeWidth="1.2" opacity="0.4" fill="none"/>
      <path d="M38 12 Q62 4 78 20" stroke="#c4b5d4" strokeWidth="1" opacity="0.3" fill="none"/>
      <path d="M12 38 Q4 62 20 78" stroke="#c4b5d4" strokeWidth="1" opacity="0.3" fill="none"/>
      <ellipse cx="46" cy="7" rx="7" ry="3" fill="#a8c5a0" opacity="0.4" transform="rotate(-30 46 7)"/>
      <ellipse cx="7" cy="46" rx="7" ry="3" fill="#a8c5a0" opacity="0.4" transform="rotate(60 7 46)"/>
    </svg>
  );
}

function FlowerDivider() {
  return (
    <div className="flex items-center justify-center gap-3 my-2">
      <div style={{ width: 70, height: 1, background: "linear-gradient(90deg, transparent, #e8b4b8)" }} />
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
        <circle cx="15" cy="15" r="3.5" fill="#c9a96e" opacity="0.85"/>
        {[0,45,90,135,180,225,270,315].map((deg, i) => (
          <ellipse key={i} cx="15" cy="15" rx="2.8" ry="6"
            fill={i % 2 === 0 ? "#e8b4b8" : "#c4b5d4"} opacity="0.7"
            transform={`rotate(${deg} 15 15) translate(0 -7.5)`}/>
        ))}
      </svg>
      <div style={{ width: 70, height: 1, background: "linear-gradient(90deg, #e8b4b8, transparent)" }} />
    </div>
  );
}

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    const calc = () => {
      const diff = WEDDING_DATE.getTime() - Date.now();
      if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      return {
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      };
    };
    setTimeLeft(calc());
    const t = setInterval(() => setTimeLeft(calc()), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="flex gap-4 justify-center flex-wrap">
      {[{ value: timeLeft.days, label: "Días" }, { value: timeLeft.hours, label: "Horas" }, { value: timeLeft.minutes, label: "Min" }, { value: timeLeft.seconds, label: "Seg" }].map((item) => (
        <div key={item.label} className="text-center">
          <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-1"
            style={{ background: "rgba(255,255,255,0.5)", backdropFilter: "blur(8px)", border: "1.5px solid rgba(232,180,184,0.5)" }}>
            <span className="text-3xl font-bold tabular-nums" style={{ fontFamily: "'Playfair Display', serif", color: "#6b4c5e" }}>
              {String(item.value).padStart(2, "0")}
            </span>
          </div>
          <p className="text-xs tracking-widest uppercase" style={{ color: "#9b7a8e", fontFamily: "'Lato', sans-serif", fontWeight: 300 }}>{item.label}</p>
        </div>
      ))}
    </div>
  );
}

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(155deg, #fdf0f2 0%, #f7e8f0 30%, #ede8f5 60%, #e4f0e2 100%)" }}>

      {/* Corner florals */}
      <FloralCorner style={{ position: "absolute", top: 0, left: 0, width: 200, height: 200, opacity: 0.7 }} />
      <FloralCorner style={{ position: "absolute", top: 0, right: 0, width: 200, height: 200, opacity: 0.7, transform: "scaleX(-1)" }} />
      <FloralCorner style={{ position: "absolute", bottom: 0, left: 0, width: 160, height: 160, opacity: 0.5, transform: "scaleY(-1)" }} />
      <FloralCorner style={{ position: "absolute", bottom: 0, right: 0, width: 160, height: 160, opacity: 0.5, transform: "scale(-1,-1)" }} />

      {/* Soft center glow */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(255,255,255,0.6) 0%, transparent 100%)" }} />

      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <p className="text-xs tracking-widest uppercase mb-6 animate-fade-in-up"
          style={{ color: "#9b7a8e", fontFamily: "'Lato', sans-serif", fontWeight: 300, letterSpacing: "0.28em" }}>
          Con amor os invitamos a celebrar
        </p>

        <h1 className="animate-fade-in-up animate-delay-200"
          style={{ fontFamily: "'Dancing Script', cursive", color: "#6b4c5e", fontSize: "clamp(3.8rem, 11vw, 6.5rem)", lineHeight: 1.1 }}>
          Sofía
        </h1>

        <FlowerDivider />

        <h1 className="animate-fade-in-up animate-delay-400"
          style={{ fontFamily: "'Dancing Script', cursive", color: "#6b4c5e", fontSize: "clamp(3.8rem, 11vw, 6.5rem)", lineHeight: 1.1 }}>
          Alejandro
        </h1>

        <p className="mt-5 mb-2 animate-fade-in-up animate-delay-400"
          style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", color: "#9b7a8e", fontSize: "1.15rem" }}>
          14 de Febrero, 2026 · Bogotá, Colombia
        </p>

        <div className="my-10 animate-fade-in-up animate-delay-600">
          <Countdown />
        </div>

        <a href="#confirmacion" className="btn-blush animate-fade-in-up animate-delay-600"
          style={{ fontFamily: "'Lato', sans-serif" }}>
          🌸 Confirmar Asistencia
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs tracking-widest uppercase" style={{ color: "#c4a8b4", fontFamily: "'Lato', sans-serif" }}>scroll</span>
        <div className="w-px h-10" style={{ background: "linear-gradient(to bottom, #e8b4b8, transparent)" }} />
      </div>
    </section>
  );
}
