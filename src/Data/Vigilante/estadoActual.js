import imagenStand from "../../assets/images/vigilante/stand-demo.jpg";

export const estadoActual = {
  // Dummy dinámico: siempre "hace 3 min" para que el chip de salud se vea en verde.
  timestamp: new Date(Date.now() - 3 * 60000).toISOString(),
  auditoria_id: "550e8400-e29b-41d4-a716-446655440000",
  imagen_url: imagenStand,
  verificado_por_ia: false,
  conteo: {
    cantidad_total: 6,
    espacios_vacios: true,
    confianza_general: 0.91,
    observaciones:
      "YOLO por slots — Slots: 6/8 ocupados. faltan: inca-500 (slot 3); coca-500 (slot 2).",
    productos_detectados: [
      { nombre: "coca-500", cantidad: 2, confianza: 0.95 },
      { nombre: "inca-500", cantidad: 0, confianza: 0.9 },
      { nombre: "agua-cielo", cantidad: 4, confianza: 0.88 },
      { nombre: "producto_no_ubicado", cantidad: 1, confianza: 0.72 },
    ],
  },
  faltantes: ["inca-500", "coca-500"],
};
