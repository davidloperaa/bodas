import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import * as XLSX from "xlsx";

const DATA_FILE = path.join(process.cwd(), "data", "rsvp.json");
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "boda2026";

export async function POST(request: NextRequest) {
  const body = await request.json();

  if (body.password !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Contraseña incorrecta" }, { status: 401 });
  }

  let data = [];
  try {
    const content = await fs.readFile(DATA_FILE, "utf-8");
    data = JSON.parse(content);
  } catch {
    data = [];
  }

  const rows = data.map((entry: Record<string, unknown>, index: number) => ({
    "#": index + 1,
    Nombre: entry.nombre,
    Apellido: entry.apellido,
    Email: entry.email,
    Teléfono: entry.telefono,
    Asistencia: entry.asistencia === "si" ? "✓ Confirma" : "✗ No asiste",
    Acompañantes: entry.acompanantes,
    "Nombres Acompañantes": entry.nombres_acompanantes,
    Transporte: entry.necesita_transporte ? "Sí necesita" : "No necesita",
    "Punto de Recogida": entry.punto_recogida,
    "Restricciones Alimentarias": entry.restricciones_alimentarias,
    Mensaje: entry.mensaje,
    "Fecha Registro": new Date(entry.fecha_registro as string).toLocaleString("es-CO"),
  }));

  const ws = XLSX.utils.json_to_sheet(rows);
  const wb = XLSX.utils.book_new();

  ws["!cols"] = [
    { wch: 5 }, { wch: 15 }, { wch: 15 }, { wch: 25 }, { wch: 15 },
    { wch: 15 }, { wch: 12 }, { wch: 30 }, { wch: 15 }, { wch: 20 },
    { wch: 25 }, { wch: 30 }, { wch: 20 },
  ];

  XLSX.utils.book_append_sheet(wb, ws, "Confirmaciones");

  const statsData = [
    ["ESTADÍSTICAS DE CONFIRMACIONES", ""],
    ["", ""],
    ["Total invitados registrados", data.length],
    ["Confirman asistencia", data.filter((d: Record<string, unknown>) => d.asistencia === "si").length],
    ["No asisten", data.filter((d: Record<string, unknown>) => d.asistencia === "no").length],
    ["Necesitan transporte", data.filter((d: Record<string, unknown>) => d.necesita_transporte).length],
    ["Total personas (con acompañantes)", data.filter((d: Record<string, unknown>) => d.asistencia === "si").reduce((sum: number, d: Record<string, unknown>) => sum + 1 + Number(d.acompanantes), 0)],
    ["", ""],
    ["Generado el", new Date().toLocaleString("es-CO")],
  ];

  const wsStats = XLSX.utils.aoa_to_sheet(statsData);
  wsStats["!cols"] = [{ wch: 35 }, { wch: 20 }];
  XLSX.utils.book_append_sheet(wb, wsStats, "Resumen");

  const buffer = XLSX.write(wb, { type: "buffer", bookType: "xlsx" });

  return new NextResponse(buffer, {
    headers: {
      "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "Content-Disposition": `attachment; filename="confirmaciones-boda-${new Date().toISOString().split("T")[0]}.xlsx"`,
    },
  });
}
