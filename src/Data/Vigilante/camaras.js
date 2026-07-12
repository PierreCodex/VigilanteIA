import fotoStand from "../../assets/images/vigilante/stand-demo.jpg";
import fotoStand2 from "../../assets/images/vigilante/stand-demo-2.jpg";

// Forma EXACTA de GET /api/panel/v1/monitoreo (cada tienda ve SOLO sus cámaras;
// el tenant viaja en el JWT — no hay vista global entre tiendas).
export const monitoreo = {
  frecuencia_minutos: 5,
  camaras: [
    {
      nodo_id: "14c19fc1b760",
      nombre: "Stand principal",
      en_linea: true,
      ultima_captura: new Date(Date.now() - 3 * 60000).toISOString(),
      imagen_url: fotoStand,
      cantidad_total: 6,
      faltantes: ["inca-500", "coca-500"],
    },
    {
      nodo_id: "a1b2c3d4e5f6",
      nombre: "Vitrina de latas",
      en_linea: true,
      ultima_captura: new Date(Date.now() - 1 * 60000).toISOString(),
      imagen_url: fotoStand2,
      cantidad_total: 4,
      faltantes: [],
    },
    {
      nodo_id: "ffeeddccbbaa",
      nombre: "Almacén trasero",
      en_linea: false,
      ultima_captura: new Date(Date.now() - 95 * 60000).toISOString(),
      imagen_url: fotoStand2,
      cantidad_total: 7,
      faltantes: [],
    },
    {
      nodo_id: "001122334455",
      nombre: "Cámara nueva (sin fotos)",
      en_linea: false,
      ultima_captura: null,
      imagen_url: null,
      cantidad_total: null,
      faltantes: [],
    },
  ],
};
