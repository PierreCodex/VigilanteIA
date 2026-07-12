const baseDate = new Date("2026-07-12T18:42:11-05:00");

const haceMinutos = (min) => {
  const d = new Date(baseDate);
  d.setMinutes(d.getMinutes() - min);
  return d.toISOString();
};

export const historialEventos = {
  pagina: 1,
  total_paginas: 3,
  total_eventos: 32,
  eventos: [
    {
      id: "e-001",
      timestamp: haceMinutos(0),
      tipo: "auditoria",
      origen: "esp32",
      conteo: {
        cantidad_total: 6,
        espacios_vacios: true,
        productos_detectados: [
          { nombre: "coca-500", cantidad: 2, confianza: 0.95 },
          { nombre: "inca-500", cantidad: 0, confianza: 0.9 },
          { nombre: "agua-cielo", cantidad: 4, confianza: 0.88 },
          { nombre: "producto_no_ubicado", cantidad: 1, confianza: 0.72 },
        ],
      },
      faltantes: ["inca-500", "coca-500"],
    },
    {
      id: "e-002",
      timestamp: haceMinutos(5),
      tipo: "discrepancia",
      sku: "coca-500",
      detalle: "bajó de 3 a 2 sin venta registrada",
      estado: "pendiente",
    },
    {
      id: "e-003",
      timestamp: haceMinutos(10),
      tipo: "auditoria",
      origen: "esp32",
      conteo: {
        cantidad_total: 7,
        espacios_vacios: false,
        productos_detectados: [
          { nombre: "coca-500", cantidad: 3, confianza: 0.94 },
          { nombre: "inca-500", cantidad: 1, confianza: 0.89 },
          { nombre: "agua-cielo", cantidad: 3, confianza: 0.87 },
        ],
      },
      faltantes: [],
    },
    {
      id: "e-004",
      timestamp: haceMinutos(15),
      tipo: "auditoria",
      origen: "manual",
      conteo: {
        cantidad_total: 7,
        espacios_vacios: false,
        productos_detectados: [
          { nombre: "coca-500", cantidad: 3, confianza: 0.96 },
          { nombre: "inca-500", cantidad: 1, confianza: 0.91 },
          { nombre: "agua-cielo", cantidad: 3, confianza: 0.9 },
        ],
      },
      faltantes: [],
    },
    {
      id: "e-005",
      timestamp: haceMinutos(20),
      tipo: "auditoria",
      origen: "esp32",
      conteo: {
        cantidad_total: 6,
        espacios_vacios: true,
        productos_detectados: [
          { nombre: "coca-500", cantidad: 2, confianza: 0.93 },
          { nombre: "inca-500", cantidad: 1, confianza: 0.88 },
          { nombre: "agua-cielo", cantidad: 3, confianza: 0.86 },
        ],
      },
      faltantes: ["coca-500"],
    },
    {
      id: "e-006",
      timestamp: haceMinutos(25),
      tipo: "discrepancia",
      sku: "agua-cielo",
      detalle: "cambió de 4 a 3 sin venta registrada",
      estado: "revisado",
    },
    {
      id: "e-007",
      timestamp: haceMinutos(30),
      tipo: "auditoria",
      origen: "esp32",
      conteo: {
        cantidad_total: 8,
        espacios_vacios: false,
        productos_detectados: [
          { nombre: "coca-500", cantidad: 3, confianza: 0.95 },
          { nombre: "inca-500", cantidad: 1, confianza: 0.92 },
          { nombre: "agua-cielo", cantidad: 4, confianza: 0.89 },
        ],
      },
      faltantes: [],
    },
    {
      id: "e-008",
      timestamp: haceMinutos(35),
      tipo: "auditoria",
      origen: "esp32",
      conteo: {
        cantidad_total: 5,
        espacios_vacios: true,
        productos_detectados: [
          { nombre: "coca-500", cantidad: 2, confianza: 0.9 },
          { nombre: "inca-500", cantidad: 0, confianza: 0.85 },
          { nombre: "agua-cielo", cantidad: 3, confianza: 0.88 },
        ],
      },
      faltantes: ["inca-500"],
    },
    {
      id: "e-009",
      timestamp: haceMinutos(40),
      tipo: "auditoria",
      origen: "esp32",
      conteo: {
        cantidad_total: 5,
        espacios_vacios: true,
        productos_detectados: [
          { nombre: "coca-500", cantidad: 2, confianza: 0.91 },
          { nombre: "inca-500", cantidad: 0, confianza: 0.84 },
          { nombre: "agua-cielo", cantidad: 3, confianza: 0.87 },
        ],
      },
      faltantes: ["inca-500"],
    },
    {
      id: "e-010",
      timestamp: haceMinutos(45),
      tipo: "discrepancia",
      sku: "inca-500",
      detalle: "desapareció de su slot asignado",
      estado: "pendiente",
    },
    {
      id: "e-011",
      timestamp: haceMinutos(50),
      tipo: "auditoria",
      origen: "esp32",
      conteo: {
        cantidad_total: 7,
        espacios_vacios: false,
        productos_detectados: [
          { nombre: "coca-500", cantidad: 3, confianza: 0.94 },
          { nombre: "inca-500", cantidad: 1, confianza: 0.9 },
          { nombre: "agua-cielo", cantidad: 3, confianza: 0.88 },
        ],
      },
      faltantes: [],
    },
    {
      id: "e-012",
      timestamp: haceMinutos(55),
      tipo: "auditoria",
      origen: "manual",
      conteo: {
        cantidad_total: 7,
        espacios_vacios: false,
        productos_detectados: [
          { nombre: "coca-500", cantidad: 3, confianza: 0.93 },
          { nombre: "inca-500", cantidad: 1, confianza: 0.91 },
          { nombre: "agua-cielo", cantidad: 3, confianza: 0.89 },
        ],
      },
      faltantes: [],
    },
    {
      id: "e-013",
      timestamp: haceMinutos(60),
      tipo: "auditoria",
      origen: "esp32",
      conteo: {
        cantidad_total: 7,
        espacios_vacios: false,
        productos_detectados: [
          { nombre: "coca-500", cantidad: 3, confianza: 0.95 },
          { nombre: "inca-500", cantidad: 1, confianza: 0.9 },
          { nombre: "agua-cielo", cantidad: 3, confianza: 0.87 },
        ],
      },
      faltantes: [],
    },
    {
      id: "e-014",
      timestamp: haceMinutos(65),
      tipo: "auditoria",
      origen: "esp32",
      conteo: {
        cantidad_total: 5,
        espacios_vacios: true,
        productos_detectados: [
          { nombre: "coca-500", cantidad: 2, confianza: 0.92 },
          { nombre: "inca-500", cantidad: 0, confianza: 0.86 },
          { nombre: "agua-cielo", cantidad: 3, confianza: 0.88 },
        ],
      },
      faltantes: ["inca-500"],
    },
    {
      id: "e-015",
      timestamp: haceMinutos(70),
      tipo: "auditoria",
      origen: "esp32",
      conteo: {
        cantidad_total: 5,
        espacios_vacios: true,
        productos_detectados: [
          { nombre: "coca-500", cantidad: 2, confianza: 0.91 },
          { nombre: "inca-500", cantidad: 0, confianza: 0.85 },
          { nombre: "agua-cielo", cantidad: 3, confianza: 0.87 },
        ],
      },
      faltantes: ["inca-500"],
    },
    {
      id: "e-016",
      timestamp: haceMinutos(75),
      tipo: "auditoria",
      origen: "esp32",
      conteo: {
        cantidad_total: 7,
        espacios_vacios: false,
        productos_detectados: [
          { nombre: "coca-500", cantidad: 3, confianza: 0.94 },
          { nombre: "inca-500", cantidad: 1, confianza: 0.9 },
          { nombre: "agua-cielo", cantidad: 3, confianza: 0.89 },
        ],
      },
      faltantes: [],
    },
    {
      id: "e-017",
      timestamp: haceMinutos(80),
      tipo: "auditoria",
      origen: "esp32",
      conteo: {
        cantidad_total: 6,
        espacios_vacios: true,
        productos_detectados: [
          { nombre: "coca-500", cantidad: 3, confianza: 0.93 },
          { nombre: "inca-500", cantidad: 1, confianza: 0.88 },
          { nombre: "agua-cielo", cantidad: 2, confianza: 0.86 },
        ],
      },
      faltantes: ["agua-cielo"],
    },
    {
      id: "e-018",
      timestamp: haceMinutos(85),
      tipo: "auditoria",
      origen: "manual",
      conteo: {
        cantidad_total: 7,
        espacios_vacios: false,
        productos_detectados: [
          { nombre: "coca-500", cantidad: 3, confianza: 0.95 },
          { nombre: "inca-500", cantidad: 1, confianza: 0.91 },
          { nombre: "agua-cielo", cantidad: 3, confianza: 0.9 },
        ],
      },
      faltantes: [],
    },
    {
      id: "e-019",
      timestamp: haceMinutos(90),
      tipo: "auditoria",
      origen: "esp32",
      conteo: {
        cantidad_total: 7,
        espacios_vacios: false,
        productos_detectados: [
          { nombre: "coca-500", cantidad: 3, confianza: 0.94 },
          { nombre: "inca-500", cantidad: 1, confianza: 0.92 },
          { nombre: "agua-cielo", cantidad: 3, confianza: 0.88 },
        ],
      },
      faltantes: [],
    },
    {
      id: "e-020",
      timestamp: haceMinutos(95),
      tipo: "auditoria",
      origen: "esp32",
      conteo: {
        cantidad_total: 8,
        espacios_vacios: false,
        productos_detectados: [
          { nombre: "coca-500", cantidad: 3, confianza: 0.96 },
          { nombre: "inca-500", cantidad: 1, confianza: 0.93 },
          { nombre: "agua-cielo", cantidad: 4, confianza: 0.91 },
        ],
      },
      faltantes: [],
    },
    {
      id: "e-021",
      timestamp: haceMinutos(100),
      tipo: "auditoria",
      origen: "esp32",
      conteo: {
        cantidad_total: 6,
        espacios_vacios: true,
        productos_detectados: [
          { nombre: "coca-500", cantidad: 2, confianza: 0.92 },
          { nombre: "inca-500", cantidad: 1, confianza: 0.89 },
          { nombre: "agua-cielo", cantidad: 3, confianza: 0.87 },
        ],
      },
      faltantes: ["coca-500"],
    },
    {
      id: "e-022",
      timestamp: haceMinutos(105),
      tipo: "auditoria",
      origen: "esp32",
      conteo: {
        cantidad_total: 7,
        espacios_vacios: false,
        productos_detectados: [
          { nombre: "coca-500", cantidad: 3, confianza: 0.95 },
          { nombre: "inca-500", cantidad: 1, confianza: 0.9 },
          { nombre: "agua-cielo", cantidad: 3, confianza: 0.88 },
        ],
      },
      faltantes: [],
    },
    {
      id: "e-023",
      timestamp: haceMinutos(110),
      tipo: "auditoria",
      origen: "esp32",
      conteo: {
        cantidad_total: 7,
        espacios_vacios: false,
        productos_detectados: [
          { nombre: "coca-500", cantidad: 3, confianza: 0.94 },
          { nombre: "inca-500", cantidad: 1, confianza: 0.91 },
          { nombre: "agua-cielo", cantidad: 3, confianza: 0.89 },
        ],
      },
      faltantes: [],
    },
    {
      id: "e-024",
      timestamp: haceMinutos(115),
      tipo: "auditoria",
      origen: "esp32",
      conteo: {
        cantidad_total: 7,
        espacios_vacios: false,
        productos_detectados: [
          { nombre: "coca-500", cantidad: 3, confianza: 0.95 },
          { nombre: "inca-500", cantidad: 1, confianza: 0.92 },
          { nombre: "agua-cielo", cantidad: 3, confianza: 0.9 },
        ],
      },
      faltantes: [],
    },
    {
      id: "e-025",
      timestamp: haceMinutos(120),
      tipo: "auditoria",
      origen: "manual",
      conteo: {
        cantidad_total: 7,
        espacios_vacios: false,
        productos_detectados: [
          { nombre: "coca-500", cantidad: 3, confianza: 0.93 },
          { nombre: "inca-500", cantidad: 1, confianza: 0.88 },
          { nombre: "agua-cielo", cantidad: 3, confianza: 0.87 },
        ],
      },
      faltantes: [],
    },
    {
      id: "e-026",
      timestamp: haceMinutos(125),
      tipo: "auditoria",
      origen: "esp32",
      conteo: {
        cantidad_total: 6,
        espacios_vacios: true,
        productos_detectados: [
          { nombre: "coca-500", cantidad: 2, confianza: 0.91 },
          { nombre: "inca-500", cantidad: 1, confianza: 0.87 },
          { nombre: "agua-cielo", cantidad: 3, confianza: 0.86 },
        ],
      },
      faltantes: ["coca-500"],
    },
    {
      id: "e-027",
      timestamp: haceMinutos(130),
      tipo: "auditoria",
      origen: "esp32",
      conteo: {
        cantidad_total: 7,
        espacios_vacios: false,
        productos_detectados: [
          { nombre: "coca-500", cantidad: 3, confianza: 0.94 },
          { nombre: "inca-500", cantidad: 1, confianza: 0.9 },
          { nombre: "agua-cielo", cantidad: 3, confianza: 0.88 },
        ],
      },
      faltantes: [],
    },
    {
      id: "e-028",
      timestamp: haceMinutos(135),
      tipo: "auditoria",
      origen: "esp32",
      conteo: {
        cantidad_total: 6,
        espacios_vacios: true,
        productos_detectados: [
          { nombre: "coca-500", cantidad: 2, confianza: 0.9 },
          { nombre: "inca-500", cantidad: 1, confianza: 0.86 },
          { nombre: "agua-cielo", cantidad: 3, confianza: 0.85 },
        ],
      },
      faltantes: ["coca-500"],
    },
    {
      id: "e-029",
      timestamp: haceMinutos(140),
      tipo: "auditoria",
      origen: "esp32",
      conteo: {
        cantidad_total: 7,
        espacios_vacios: false,
        productos_detectados: [
          { nombre: "coca-500", cantidad: 3, confianza: 0.95 },
          { nombre: "inca-500", cantidad: 1, confianza: 0.91 },
          { nombre: "agua-cielo", cantidad: 3, confianza: 0.89 },
        ],
      },
      faltantes: [],
    },
    {
      id: "e-030",
      timestamp: haceMinutos(145),
      tipo: "auditoria",
      origen: "esp32",
      conteo: {
        cantidad_total: 6,
        espacios_vacios: true,
        productos_detectados: [
          { nombre: "coca-500", cantidad: 2, confianza: 0.92 },
          { nombre: "inca-500", cantidad: 1, confianza: 0.88 },
          { nombre: "agua-cielo", cantidad: 3, confianza: 0.87 },
        ],
      },
      faltantes: ["coca-500"],
    },
    {
      id: "e-031",
      timestamp: haceMinutos(150),
      tipo: "discrepancia",
      sku: "coca-500",
      detalle: "faltante parcial: quedan 2, falta 1 espacio",
      estado: "pendiente",
    },
    {
      id: "e-032",
      timestamp: haceMinutos(155),
      tipo: "auditoria",
      origen: "esp32",
      conteo: {
        cantidad_total: 7,
        espacios_vacios: false,
        productos_detectados: [
          { nombre: "coca-500", cantidad: 3, confianza: 0.94 },
          { nombre: "inca-500", cantidad: 1, confianza: 0.9 },
          { nombre: "agua-cielo", cantidad: 3, confianza: 0.88 },
        ],
      },
      faltantes: [],
    },
  ],
};
