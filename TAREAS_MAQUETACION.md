# Tareas del Panel VigilanteIA — FASE: CONEXIÓN REAL

**Para:** agente del panel · **Fecha:** 2026-07-13 · **Repo:** este (template Viho, React 19 + Vite 7 + reactstrap)

## 🚨 ESTADO ACTUAL — LEER PRIMERO (esto manda sobre todo lo de abajo)

La fase de maquetación con datos DUMMY **YA TERMINÓ**. El panel **YA ESTÁ CONECTADO al
backend real** (FastAPI). NO estás empezando de cero:

- **Login REAL** (`src/Auth/Signin.jsx`): usa `iniciarSesion()` contra el backend + JWT.
  El login fake (test@gmail.com) **fue eliminado**. NO lo restaures.
- **Cliente API real**: `src/api/vigilanteApi.js` (axios + `VITE_API_URL` + Bearer JWT +
  manejo de 401). Todas las vistas lo usan.
- **Vistas YA conectadas y funcionando**: `Stand`, `Monitoreo`, `Productos`, `Historial`
  consumen la API real (`getStandActual`, `getMonitoreo`, `getSlots/putSlots`,
  `getEventos/getDiscrepancias`). NO tienen dummy.
- **Roles**: el menú oculta items `soloAdmin` según el rol del JWT (`esAdmin()`).

**Tu trabajo AHORA:** implementar **T7 (Tiendas)** y **T8 (Integración)** CONECTADAS al
backend real (las funciones axios ya existen en `vigilanteApi.js`) — más el encargo de
`LIMPIEZA_MENU.md`. **NO reviertas nada a dummy. NO toques el login. NO reintroduzcas
archivos de datos falsos.** Las secciones "dummy" de T1–T6 abajo son HISTÓRICAS (ya
hechas) — se dejan como referencia del contrato JSON, no como tarea a rehacer.

## Contexto del producto

VigilanteIA es un vigilante de inventario: una cámara fija fotografía un stand de
minimarket cada 5 minutos, un backend cuenta los productos por posición ("slot"),
detecta faltantes y — con el POS conectado — distingue una venta de una merma. Este
panel es **la cara para el dueño de la tienda** (usuario NO técnico).

## Reglas generales

1. **Conectar SIEMPRE al backend real** vía las funciones de `src/api/vigilanteApi.js`.
   NO crear archivos de datos dummy nuevos. Si una función axios que necesitas no existe,
   agrégala en `vigilanteApi.js` siguiendo el patrón de las que ya están.
2. **NO borrar ni refactorizar los módulos demo del template** (ecommerce, chat, email…).
   Solo AGREGAR/editar lo de VigilanteIA. La limpieza del menú es su propio encargo
   (`LIMPIEZA_MENU.md`).
3. **NO tocar el login real** (`src/Auth/Signin.jsx`, `PrivateRoute`, `vigilanteApi.js`).
   Ya funciona contra el backend.
4. **UI en español** (bodeguero peruano). Textos simples, sin jerga técnica:
   "falta Coca-Cola 500ml desde las 18:42", no "discrepancia SKU".
5. Responsive: el dueño lo verá sobre todo desde el CELULAR (probar a 390px).
6. **Reutilizar componentes del template** (ver ⭐ Regla de Oro más abajo): NO crear
   estilos nuevos ni CSS propio.

## Formas JSON (contrato REAL del backend — no inventar campos)

Estas son las respuestas REALES de los endpoints (ya en producción). Úsalas como
referencia del shape; las vistas nuevas las obtienen con las funciones de
`src/api/vigilanteApi.js`, no con archivos dummy.

**Estado actual del stand** (`GET /stand/actual`):

```json
{
  "timestamp": "2026-07-12T18:42:11-05:00",
  "auditoria_id": "uuid",
  "imagen_url": "https://.../captura.jpg",
  "verificado_por_ia": false,
  "conteo": {
    "cantidad_total": 6,
    "espacios_vacios": true,
    "confianza_general": 0.91,
    "observaciones": "YOLO por slots — Slots: 6/8 ocupados. faltan: inca-500 (slot 3); coca-500 (slot 2).",
    "productos_detectados": [
      { "nombre": "coca-500", "cantidad": 2, "confianza": 0.95 },
      { "nombre": "inca-500", "cantidad": 0, "confianza": 0.90 },
      { "nombre": "agua-cielo", "cantidad": 4, "confianza": 0.88 }
    ]
  },
  "faltantes": ["inca-500", "coca-500"]
}
```

Semántica IMPORTANTE: **la fuente de verdad de qué falta es el array `faltantes`**, NO
el `cantidad: 0`. Puede incluir SKUs con cantidad > 0 — es el **faltante parcial**: si
coca-500 tiene 3 posiciones y solo 2 ocupadas, viene `cantidad: 2` Y ADEMÁS aparece en
`faltantes` (le falta una unidad — esa es la señal de merma). En la UI: todo SKU dentro
de `faltantes` va en rojo, mostrando su cantidad actual ("coca-500: quedan 2, falta 1
espacio"). El nombre reservado `producto_no_ubicado` = producto fuera de su posición
(badge amarillo "stand desordenado"). `confianza` va de 0.0 a 1.0.

**Slots** (`GET/PUT /slots`): coordenadas normalizadas 0–1 relativas a la imagen,
esquina superior izquierda.

```json
{
  "slots": [
    { "id": 1, "sku": "coca-500", "roi": { "x": 0.42, "y": 0.40, "w": 0.30, "h": 0.19 } },
    { "id": 2, "sku": "inca-500", "roi": { "x": 0.10, "y": 0.51, "w": 0.24, "h": 0.20 } }
  ]
}
```

**Historial** (`GET /eventos?sku=&desde=&hasta=&page=`): lista paginada de estados como
el de arriba + eventos de discrepancia:

```json
{
  "eventos": [
    {
      "id": "uuid",
      "timestamp": "2026-07-12T18:42:11-05:00",
      "tipo": "discrepancia",
      "sku": "coca-500",
      "detalle": "bajó de 2 a 1 sin venta registrada",
      "estado": "pendiente"
    },
    {
      "id": "uuid",
      "timestamp": "2026-07-12T18:37:05-05:00",
      "tipo": "auditoria",
      "origen": "esp32",
      "conteo": { "cantidad_total": 7, "espacios_vacios": false, "productos_detectados": [] },
      "faltantes": []
    }
  ],
  "pagina": 1,
  "total_paginas": 12,
  "total_eventos": 234
}
```

Nota: los eventos `tipo: "auditoria"` vienen de `getEventos()`; las `discrepancia`
(conciliación venta-vs-merma) de `getDiscrepancias()`. La vista Historial YA une ambos
en una línea de tiempo con semáforo (Venta ✓ / Merma / Por conciliar). No es dummy.

## Tareas

> **T1–T6 = HISTÓRICAS (ya implementadas y luego conectadas al backend real).** Se dejan
> abajo SOLO como referencia del contrato y del comportamiento esperado de cada vista.
> **NO las rehagas ni las reviertas a dummy.** Tus tareas activas son **T7, T8** y el
> encargo de **`LIMPIEZA_MENU.md`**.

### T1 — Datos dummy + rutas + menú ✅ (histórica; hoy las vistas usan la API real)
- Crear `src/Data/Vigilante/` con los JSON dummy (formas de arriba): estado actual,
  ~30 eventos de historial variados (auditorías normales, 2-3 discrepancias, un
  `producto_no_ubicado`, y al menos 1 **faltante parcial**: SKU con cantidad > 0 que
  igual aparece en `faltantes`), 4-6 slots, lista de SKUs.
- Usar de imagen del stand cualquier foto placeholder de estante (hay imágenes en
  `src/assets/images/ecommerce/` que sirven).
- Agregar las páginas al router (`src/Route/LayoutRoutes.jsx`) y una sección
  "VigilanteIA" al menú (`src/Layout/Sidebar/SidebarMenuItems.jsx`) con 3 entradas:
  Mi stand, Configurar productos, Historial.

### T2 — Vista "Mi stand ahora" (`/stand`)
La pantalla principal. De un vistazo el dueño sabe si le falta algo:
- Foto grande de la última captura + hora ("hace 4 min").
- Tarjetas por producto: nombre, cantidad, indicador de confianza. **Faltantes
  (`cantidad: 0`) en rojo y ARRIBA**, con texto tipo "¡Falta inca-500!".
- Badge amarillo si hay `producto_no_ubicado` ("hay un producto fuera de su lugar").
- Banner de estado general: verde "Todo en orden" / rojo "N productos faltantes".
- **Chip de salud del nodo** junto al título: "🟢 Cámara en línea — última foto hace
  3 min" / "🔴 Sin señal desde las 14:02" (dummy: derivar del timestamp del JSON;
  regla: >2× la frecuencia de captura (10 min) sin foto = sin señal).
- **Botón "📸 Capturar ahora"** (primario): en real le pide al ESP32 una foto fresca
  al instante; en dummy muestra un toast "Captura solicitada" y un spinner ~3 s.
  NO hay video en vivo (decisión de producto): la sensación de "en vivo" la dan
  este botón + el auto-refresh.
- **Auto-refresh** de la vista cada 30–60 s (en dummy basta un `setInterval` que
  re-renderiza y actualiza el "hace X min").

### T3 — Vista "Configurar productos" (`/productos`)
El dueño dibuja un rectángulo por producto sobre la foto y le pone nombre:
- Foto del stand con los slots existentes dibujados encima (rectángulos numerados con
  su etiqueta). Overlay posicionado con las coords normalizadas (x/y/w/h × tamaño
  renderizado de la imagen).
- Dibujar slot nuevo: `react-image-crop` (ya instalado) o canvas propio — a criterio,
  pero las coords guardadas SIEMPRE normalizadas 0–1.
- Al crear/seleccionar un slot: input de texto libre para el SKU/nombre + botón borrar.
- Botón "Guardar cambios" (por ahora actualiza el estado local y muestra un toast).
- Estado vacío (sin slots): mensaje guía "Dibuja un recuadro sobre cada producto que
  quieres vigilar".

### T4 — Vista "Historial" (`/historial`)
- Tabla (react-data-table-component ya instalado) con: hora, tipo (badge: auditoría /
  discrepancia), producto, detalle, estado.
- **Discrepancias resaltadas en rojo** — es lo que el dueño viene a buscar.
- Filtros: por producto (select con los SKUs dummy) y rango de fechas (datepicker del
  template). Paginación.
- Bonus si sobra tiempo: mini gráfico ApexCharts con la evolución del conteo total
  del día.

### T5 — Login con branding
- Solo estética de `src/Auth/Signin.jsx` y su layout: logo/nombre "VigilanteIA",
  textos en español, quitar botones de social login (`SocialAuth`).
- **La lógica fake se queda tal cual** (test@gmail.com / test123).

## ⭐ REGLA DE ORO: reutilizar componentes del template (NO crear estilos nuevos)

El template Viho ya trae ~200 componentes en `src/Components/`. Para CADA pieza de UI
que necesites (tabla, tarjeta, modal, formulario, lista, badge de estado, gráfico),
**tú (el agente) DEBES primero buscar un componente parecido en el template, copiar su
patrón de clases y adaptarlo** — en vez de escribir CSS propio o `style={{...}}` a mano.

Cómo trabajar cada vista:
1. Antes de escribir código, explora `src/Components/` y elige el/los componentes cuyo
   patrón visual más se parezca a lo que necesitas.
2. Copia sus clases (`media`, `widget-joins`, `b-l-*`, `bg-light-*`, `font-*`,
   `table-bordernone`, `user-status`, etc.) y su estructura JSX.
3. Solo cambia los DATOS (los del backend), no inventes estilos.
4. Declara al inicio de tu entrega QUÉ componente del template reutilizaste para cada
   vista (ej. "Tiendas reutiliza el patrón de `Dashboard/Default/RecentOrderCard`").

Catálogo de referencia (mira estos primero según lo que necesites):
- **Tablas** → `Tables/DataTable/` (react-data-table, con filtros/orden/paginación),
  `Widgets/General/EmployeeStatusCard.jsx` (tabla simple con badges y progress),
  `Dashboard/Default/RecentOrderCard.jsx`.
- **Listas tipo tarjeta** (mejor que tabla en móvil) → patrón `media` de
  `Dashboard/Ecommerce/TopSellingCard.jsx` (ya usado en la vista Mi stand).
- **KPIs / contadores** → `Widgets/General/WidgetArrowCard.jsx` (patrón `widget-joins`
  + `react-countup`), `Dashboard/Ecommerce/TotalSellingCard.jsx`.
- **Formularios** → `Forms/FormLayout/Default/` y `FormWizard1/`.
- **Modales** → `UiKits/Modals/` (Basic, Sizes, VaryingContent).
- **Gráficos** → `Charts/ApexCharts/` y los `*Card.jsx` de `Dashboard/` que ya usan
  ApexCharts.

La vista **Mi stand** (`Components/VigilanteIA/Stand/index.jsx`) ya está hecha con este
criterio — úsala como ejemplo de estilo a seguir (monitor NVR, tarjetas `media` con
icono de estado + borde de color + progress, KPIs `widget-joins`). Las vistas nuevas
deben verse coherentes con ella.

### ▶ T7 — Vista admin "Tiendas" (`/admin/tiendas`) — ACTIVA, CONECTAR A LA API REAL

**Reutiliza componentes** (ver Regla de Oro): la tabla de tiendas con el patrón de
`Widgets/General/EmployeeStatusCard.jsx` o `Tables/DataTable/`; el modal "Nueva tienda"
con `UiKits/Modals/`; el formulario dentro del modal con el patrón de
`Forms/FormLayout/Default/`.

Solo para el administrador (item `soloAdmin` en el menú). **Conéctala a la API real** con
`getTenants()` y `crearTenant()` de `src/api/vigilanteApi.js` (ya existen). Endpoints:
`GET/POST /api/panel/v1/admin/tenants` (requieren rol admin — el backend responde 403 si
no lo es). NADA de dummy. Forma real de cada fila:

- **Tabla de tiendas**: nombre, slug, dueño (email), cámaras (MACs como badges),
  estado activo/inactivo. Forma real de cada fila:

```json
{
  "id": "uuid",
  "nombre": "Bodega Doña Rosa",
  "slug": "bodega-dona-rosa",
  "activo": true,
  "dueno_email": "rosa@gmail.com",
  "nodos": ["14c19fc1b760"]
}
```

- **Botón "＋ Nueva tienda"** → modal con el formulario (forma EXACTA del request):
  - `nombre` (texto, requerido) — nombre de la tienda.
  - `dueno_email` (email, requerido) + `dueno_password` (mín. 6, requerido) +
    `dueno_nombre` (opcional) — el login que usará el dueño.
  - `nodo_mac` (opcional) — MAC de la cámara ESP32 de la tienda, formato libre
    (`14:C1:9F:C1:B7:60` o `14c19fc1b760`; el backend la normaliza).
  - Al enviar: `crearTenant({nombre, dueno_email, dueno_password, dueno_nombre, nodo_mac})`
    → toast "Tienda creada" + refrescar la tabla con `getTenants()`.
- Errores a contemplar en la UI: email duplicado y MAC duplicada (la API responde
  409 con `detail` legible — mostrar en el modal).
- Esta vista va en el menú DENTRO de la sección admin, junto a "Herramientas".

### T8 — Vista "Integración" (`/integracion`) — NUEVA (2026-07-12)

**Reutiliza componentes** (ver Regla de Oro): el formulario con el patrón de
`Forms/FormLayout/Default/` (Card + FormGroup + Label + Input de reactstrap); el
resultado de "Probar conexión" con un `Alert` de `UiKits/Alert/` o el badge de estado
del patrón que ya usa Mi stand. NADA de CSS nuevo.

Conectar el sistema del cliente (POS) para la conciliación venta-vs-merma. La API
real YA existe y el cliente axios también (`getIntegracion`, `putIntegracion`,
`probarIntegracion` en `src/api/vigilanteApi.js`) — esta vista se conecta DIRECTO
(ya no hay dummy en este repo):

- **Formulario** (Card): select `tipo` (SistemaPos / API estándar / Sin sistema),
  input `base_url` (ej. `https://mipos.com`), input `token` tipo password con nota
  "déjalo vacío para conservar el guardado" (la API nunca devuelve el token; muestra
  `token_configurado: true/false` como badge "Token guardado ✓").
- **Botón "Probar conexión"**: llama `probarIntegracion()` → toast verde con
  `latencia_ms` o rojo con el `mensaje` de error.
- **Botón "Guardar"**: `putIntegracion({tipo, base_url, token, activo})`.
- Texto explicativo para el dueño: "Conecta tu sistema de ventas para que
  VigilanteIA distinga una venta normal de una pérdida. Solo lectura: nunca
  modificamos nada en tu sistema."
- Entrada de menú en la sección VigilanteIA (icono Link/Share2), visible para todos
  los roles.

### T6 — Placeholder sección admin ✅ (histórica; ya existe la página placeholder)
- Entrada de menú "Herramientas (admin)" con página placeholder. Ya hecha. Aquí vivirán
  después las herramientas de ingeniería.

## Definición de "terminado" (para T7 y T8)

- `npm run dev` levanta sin errores ni warnings nuevos en consola.
- T7 y T8 navegables desde el sidebar y **consumiendo la API real** (con el backend
  corriendo en `VITE_API_URL`), usables en móvil (probar a 390px).
- T7 usa `getTenants`/`crearTenant`; T8 usa `getIntegracion`/`putIntegracion`/
  `probarIntegracion`. NADA de datos dummy.
- Reutilizan componentes del template (declarar cuáles) — sin CSS nuevo.
- Nada del template original ni de las vistas ya conectadas (Stand/Monitoreo/Productos/
  Historial/Login) roto.

---

## Estado de avance — 2026-07-12

Tareas implementadas. Para revisión:

- [x] **T1 — Datos dummy + rutas + menú**
  - Creados `src/Data/Vigilante/` con `estadoActual.js`, `historialEventos.js`, `slots.js`, `skus.js` e `index.js`.
  - Formas JSON respetan exactamente el contrato del documento.
  - Imagen del stand: `src/assets/images/ecommerce/01.jpg`.
  - Rutas agregadas en `src/Route/Routes.jsx`: `/stand`, `/productos`, `/historial`, `/admin/herramientas`.
  - Menú "VigilanteIA" agregado en `src/Layout/Sidebar/Menu.jsx` con 4 entradas.

- [x] **T2 — Vista "Mi stand ahora" (`/stand`)**
  - Foto grande con hora relativa ("hace X min").
  - Tarjetas de productos; faltantes arriba en rojo con mensaje según cantidad (`cantidad: 0` vs faltante parcial).
  - Badge amarillo para `producto_no_ubicado`.
  - Banner de estado general verde/rojo.
  - Chip de salud del nodo junto al título (regla >10 min sin foto = sin señal).
  - Botón "Capturar ahora" con toast + spinner ~3 s.
  - Auto-refresh cada 30 s.

- [x] **T3 — Vista "Configurar productos" (`/productos`)**
  - Foto con slots dibujados en coordenadas normalizadas.
  - Dibujo de nuevos slots con mouse/touch; coords guardadas siempre 0–1.
  - Edición de SKU por slot con datalist de SKUs disponibles + botón borrar.
  - Botón "Guardar cambios" actualiza estado local y muestra toast.
  - Estado vacío con mensaje guía.

- [x] **T4 — Vista "Historial" (`/historial`)**
  - Tabla con hora, tipo (badge), producto, detalle, estado.
  - Discrepancias resaltadas en rojo.
  - Filtros por producto (select) y rango de fechas (react-datepicker).
  - Paginación incluida.
  - Bonus: mini gráfico ApexCharts con evolución del conteo total.

- [x] **T5 — Login con branding**
  - `src/Auth/Signin.jsx` restilizado con nombre "VigilanteIA" y textos en español.
  - Se quitó `SocialAuth` y los botones de social login.
  - Lógica fake (`test@gmail.com` / `test123`) se mantiene.

- [x] **T6 — Placeholder sección admin**
  - Entrada "Herramientas (admin)" en el menú con página placeholder en `/admin/herramientas`.

### Notas de verificación

- `npm run build` pasa sin errores nuevos (solo warnings preexistentes del template Viho).
- No se conectó ninguna API real; todos los datos son dummy locales.
- No se borraron ni refactorizaron módulos demo del template.
- No se tocó el flujo de autenticación, solo se restilizó el login.
- La interfaz está pensada para móvil (revisar a 390 px de ancho).
