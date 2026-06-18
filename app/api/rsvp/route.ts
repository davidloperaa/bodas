import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "rsvp.json");

export interface RSVPEntry {
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

async function readData(): Promise<RSVPEntry[]> {
  try {
    const content = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(content);
  } catch {
    return [];
  }
}

async function writeData(data: RSVPEntry[]): Promise<void> {
  await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2), "utf-8");
}

export async function GET() {
  const data = await readData();
  return NextResponse.json(data);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const entry: RSVPEntry = {
      id: crypto.randomUUID(),
      nombre: body.nombre || "",
      apellido: body.apellido || "",
      email: body.email || "",
      telefono: body.telefono || "",
      asistencia: body.asistencia || "si",
      acompanantes: Number(body.acompanantes) || 0,
      nombres_acompanantes: body.nombres_acompanantes || "",
      necesita_transporte: Boolean(body.necesita_transporte),
      punto_recogida: body.punto_recogida || "",
      restricciones_alimentarias: body.restricciones_alimentarias || "",
      mensaje: body.mensaje || "",
      fecha_registro: new Date().toISOString(),
    };

    if (!entry.nombre || !entry.apellido) {
      return NextResponse.json({ error: "Nombre y apellido son requeridos" }, { status: 400 });
    }

    const data = await readData();

    const exists = data.find(
      (d) => d.email && d.email === entry.email && entry.email !== ""
    );
    if (exists) {
      return NextResponse.json(
        { error: "Ya existe una confirmación con este correo electrónico" },
        { status: 409 }
      );
    }

    data.push(entry);
    await writeData(data);

    return NextResponse.json({ success: true, id: entry.id }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Error al procesar la solicitud" }, { status: 500 });
  }
}
