import { Box, Camera, Clock, Home, Link, Radio, Tool } from "react-feather";

export const MENUITEMS = [
  {
    menutitle: "Mi negocio",
    menucontent: "VigilanteIA",
    Items: [
      {
        title: "Mi stand",
        icon: Camera,
        type: "link",
        path: `/stand`,
      },
      {
        title: "Monitoreo",
        icon: Radio,
        type: "link",
        path: `/monitoreo`,
      },
      {
        title: "Configurar productos",
        icon: Box,
        type: "link",
        path: `/productos`,
      },
      {
        title: "Historial",
        icon: Clock,
        type: "link",
        path: `/historial`,
      },
      {
        title: "Integración",
        icon: Link,
        type: "link",
        path: `/integracion`,
      },
    ],
  },
  {
    menutitle: "Administración",
    menucontent: "Solo administrador",
    Items: [
      {
        title: "Tiendas",
        icon: Home,
        type: "link",
        path: `/admin/tiendas`,
        soloAdmin: true,
      },
      {
        title: "Herramientas",
        icon: Tool,
        type: "link",
        path: `/admin/herramientas`,
        soloAdmin: true,
      },
    ],
  },
];
