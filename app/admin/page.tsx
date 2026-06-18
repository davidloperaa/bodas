"use client";
import { useState, useEffect } from "react";

interface RSVPEntry {
  id: string;
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  asistencia: "si" | "no";
  acompanantes: number;
  nombres_acompanantes: string;
  necesita_transporte: boolean;
  punto_recogida: string;
  restricciones_alimentarias: string;
  mensaje: string;
  fecha_registro: string;
}

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [error, setError] = useState("");
  const [data, setData] = useState<RSVPEntry[]>([]);
  const [loading, setLoading] = useState(false);
  const [exporting, setExporting] = useState(false);
  const [filter, setFilter] = useState<"all" | "si" | "no">("all");
  const [search, setSearch] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setPassword(passwordInput);
    setAuthenticated(true);
    setError("");
  };

  useEffect(() => {
    if (authenticated) {
      fetchData();
    }
  }, [authenticated]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/rsvp");
      if (res.ok) {
        const json = await res.json();
        setData(json);
      }
    } catch {
      setError("Error al cargar los datos");
    } finally {
      setLoading(false);
    }
  };

  const handleExport = async () => {
    setExporting(true);
    try {
      const res = await fetch("/api/admin/export", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) {
        const json = await res.json();
        setError(json.error || "Error al exportar");
        return;
      }
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `confirmaciones-boda-${new Date().toISOString().split("T")[0]}.xlsx`;
      a.click();
      URL.revokeObjectURL(url);
    } catch {
      setError("Error al exportar el archivo");
    } finally {
      setExporting(false);
    }
  };

  if (!authenticated) {
    return (
      <div
        className="min-h-screen flex items-center justify-center px-6"
        style={{ background: "linear-gradient(135deg, #2c1810, #4a2c1a)" }}
      >
        <div className="card-elegant p-10 max-w-md w-full text-center">
          <h1
            className="text-4xl mb-2"
            style={{ fontFamily: "'Dancing Script', cursive", color: "#2c1810" }}
          >
            Panel Administrativo
          </h1>
          <p
            className="text-sm mb-8"
            style={{ color: "#6b4c3b", fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
          >
            Sofía & Alejandro — Boda 2026
          </p>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              placeholder="Contraseña de administrador"
              className="input-elegant mb-4"
              required
            />
            {error && (
              <p className="text-red-500 text-sm mb-4">{error}</p>
            )}
            <button type="submit" className="btn-gold w-full" style={{ fontFamily: "'Lato', sans-serif" }}>
              Ingresar
            </button>
          </form>
          <p
            className="text-xs mt-6"
            style={{ color: "#c9a96e", fontFamily: "'Lato', sans-serif" }}
          >
            Acceso restringido · Solo organizadores
          </p>
        </div>
      </div>
    );
  }

  const filtered = data
    .filter((d) => filter === "all" || d.asistencia === filter)
    .filter(
      (d) =>
        search === "" ||
        `${d.nombre} ${d.apellido} ${d.email}`.toLowerCase().includes(search.toLowerCase())
    );

  const confirman = data.filter((d) => d.asistencia === "si");
  const totalPersonas = confirman.reduce((sum, d) => sum + 1 + d.acompanantes, 0);
  const conTransporte = confirman.filter((d) => d.necesita_transporte).length;

  return (
    <div className="min-h-screen" style={{ background: "#fdf8f0" }}>
      {/* Header */}
      <div
        className="py-8 px-6"
        style={{ background: "linear-gradient(135deg, #2c1810, #4a2c1a)", borderBottom: "1px solid rgba(201,169,110,0.3)" }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4">
          <div>
            <h1
              className="text-3xl"
              style={{ fontFamily: "'Dancing Script', cursive", color: "white" }}
            >
              Panel Administrativo
            </h1>
            <p
              className="text-sm"
              style={{ color: "rgba(201,169,110,0.8)", fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
            >
              Sofía & Alejandro — 14 Febrero 2026
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={fetchData}
              className="btn-outline-gold text-sm"
              style={{ fontFamily: "'Lato', sans-serif", padding: "0.5rem 1.25rem" }}
            >
              ↻ Actualizar
            </button>
            <button
              onClick={handleExport}
              disabled={exporting}
              className="btn-gold text-sm flex items-center gap-2"
              style={{ fontFamily: "'Lato', sans-serif", padding: "0.5rem 1.25rem", opacity: exporting ? 0.7 : 1 }}
            >
              {exporting ? "Generando..." : "📥 Descargar Excel"}
            </button>
            <a href="/" className="btn-outline-gold text-sm" style={{ fontFamily: "'Lato', sans-serif", padding: "0.5rem 1.25rem" }}>
              ← Volver
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200">
            <p className="text-red-600 text-sm">{error}</p>
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { label: "Total registros", value: data.length, icon: "📋" },
            { label: "Confirman asistencia", value: confirman.length, icon: "✅" },
            { label: "Total personas", value: totalPersonas, icon: "👥" },
            { label: "Necesitan transporte", value: conTransporte, icon: "🚌" },
          ].map((stat) => (
            <div key={stat.label} className="card-elegant p-6 text-center">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div
                className="text-4xl font-bold mb-1"
                style={{ fontFamily: "'Playfair Display', serif", color: "#c9a96e" }}
              >
                {stat.value}
              </div>
              <p
                className="text-xs tracking-widest uppercase"
                style={{ color: "#6b4c3b", fontFamily: "'Lato', sans-serif" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-6 items-center">
          <div className="flex gap-2">
            {[
              { value: "all", label: "Todos" },
              { value: "si", label: "Confirman" },
              { value: "no", label: "No asisten" },
            ].map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value as "all" | "si" | "no")}
                className="text-sm px-4 py-2 rounded-full transition-all"
                style={{
                  background: filter === f.value ? "#c9a96e" : "white",
                  color: filter === f.value ? "white" : "#6b4c3b",
                  border: "1px solid #c9a96e",
                  fontFamily: "'Lato', sans-serif",
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar por nombre o email..."
            className="input-elegant"
            style={{ maxWidth: "300px" }}
          />
        </div>

        {/* Table */}
        {loading ? (
          <div className="text-center py-20">
            <p style={{ color: "#c9a96e", fontFamily: "'Lato', sans-serif" }}>Cargando...</p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 card-elegant">
            <p
              className="text-2xl mb-2"
              style={{ fontFamily: "'Dancing Script', cursive", color: "#2c1810" }}
            >
              No hay confirmaciones aún
            </p>
            <p style={{ color: "#6b4c3b", fontFamily: "'Lato', sans-serif", fontWeight: 300 }}>
              Las confirmaciones aparecerán aquí una vez que los invitados respondan.
            </p>
          </div>
        ) : (
          <div className="card-elegant overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ background: "#fdf8f0", borderBottom: "2px solid #e8d5b0" }}>
                    {["#", "Nombre", "Contacto", "Asistencia", "Acompañantes", "Transporte", "Fecha"].map((h) => (
                      <th
                        key={h}
                        className="px-4 py-3 text-left text-xs tracking-widest uppercase"
                        style={{ color: "#c9a96e", fontFamily: "'Lato', sans-serif" }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((entry, i) => (
                    <tr
                      key={entry.id}
                      style={{ borderBottom: "1px solid #f0e8d8" }}
                      className="hover:bg-amber-50 transition-colors"
                    >
                      <td className="px-4 py-3" style={{ color: "#c9a96e", fontFamily: "'Lato', sans-serif" }}>
                        {i + 1}
                      </td>
                      <td className="px-4 py-3">
                        <p
                          className="font-bold"
                          style={{ color: "#2c1810", fontFamily: "'Lato', sans-serif" }}
                        >
                          {entry.nombre} {entry.apellido}
                        </p>
                        {entry.restricciones_alimentarias && (
                          <p className="text-xs" style={{ color: "#c9a96e" }}>
                            🥗 {entry.restricciones_alimentarias}
                          </p>
                        )}
                      </td>
                      <td className="px-4 py-3">
                        <p style={{ color: "#6b4c3b", fontFamily: "'Lato', sans-serif", fontWeight: 300 }}>
                          {entry.email}
                        </p>
                        <p className="text-xs" style={{ color: "#6b4c3b" }}>{entry.telefono}</p>
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className="px-3 py-1 rounded-full text-xs font-bold"
                          style={{
                            background: entry.asistencia === "si" ? "rgba(34,197,94,0.1)" : "rgba(239,68,68,0.1)",
                            color: entry.asistencia === "si" ? "#16a34a" : "#dc2626",
                          }}
                        >
                          {entry.asistencia === "si" ? "✓ Confirma" : "✗ No asiste"}
                        </span>
                      </td>
                      <td className="px-4 py-3" style={{ color: "#6b4c3b", fontFamily: "'Lato', sans-serif" }}>
                        {entry.asistencia === "si" ? (
                          <>
                            <span>{entry.acompanantes + 1} persona(s)</span>
                            {entry.nombres_acompanantes && (
                              <p className="text-xs" style={{ color: "#c9a96e" }}>{entry.nombres_acompanantes}</p>
                            )}
                          </>
                        ) : "—"}
                      </td>
                      <td className="px-4 py-3">
                        {entry.necesita_transporte ? (
                          <div>
                            <span className="text-xs px-2 py-1 rounded-full" style={{ background: "rgba(201,169,110,0.15)", color: "#c9a96e" }}>
                              🚌 Sí
                            </span>
                            {entry.punto_recogida && (
                              <p className="text-xs mt-1" style={{ color: "#6b4c3b" }}>{entry.punto_recogida}</p>
                            )}
                          </div>
                        ) : (
                          <span style={{ color: "#c0b0a0", fontFamily: "'Lato', sans-serif" }}>No</span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-xs" style={{ color: "#c0b0a0", fontFamily: "'Lato', sans-serif" }}>
                        {new Date(entry.fecha_registro).toLocaleDateString("es-CO", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        <p
          className="text-center mt-6 text-xs"
          style={{ color: "#c9a96e", fontFamily: "'Lato', sans-serif" }}
        >
          Mostrando {filtered.length} de {data.length} registros ·
          Cambia la contraseña en el archivo .env (variable ADMIN_PASSWORD)
        </p>
      </div>
    </div>
  );
}
