# Encargo: limpiar el menú y la UI del template — Panel VigilanteIA

**Para:** agente de maquetación · **Fecha:** 2026-07-13 · **Repo:** este

## Objetivo

El sidebar hoy muestra ~40 módulos demo del template Viho (Dashboard, Widgets,
UI Kits, Ecommerce, Chat, Email…). El panel es un producto real: debe mostrar
SOLO lo de VigilanteIA. Este encargo es de LIMPIEZA VISUAL — no de borrado de
código (eso llega en otra fase).

## Reglas duras

1. **Editar el menú, NO borrar componentes ni rutas.** Los módulos demo del
   template se quedan en `src/Components/` y `src/Route/Routes.jsx` como código
   muerto (se eliminan en una fase posterior con más calma). Lo que desaparece
   es su ENTRADA EN EL MENÚ.
2. **NO tocar** `src/api/vigilanteApi.js`, `PrivateRoute`, `Signin.jsx` ni las
   vistas de `src/Components/VigilanteIA/` (ya están conectadas al backend real).
3. Cero estilos nuevos: solo componentes/clases del template.
4. Al terminar: `npm run dev` sin errores nuevos y todas las vistas VigilanteIA
   navegables.

## T1 — Menú definitivo (`src/Layout/Sidebar/Menu.jsx`)

Reemplazar TODO el contenido de `MENUITEMS` por exactamente esto (respetar los
`soloAdmin` — el sidebar ya los filtra por el rol del JWT):

```
Sección "Mi negocio"
  🏪 Mi stand              → /stand
  📡 Monitoreo             → /monitoreo
  📦 Configurar productos  → /productos
  🕑 Historial             → /historial
  🔗 Integración           → /integracion        (cuando exista la vista T8)

Sección "Administración"        (TODOS los items con soloAdmin: true)
  🏬 Tiendas               → /admin/tiendas      (cuando exista la vista T7)
  🛠 Herramientas          → /admin/herramientas
```

- Iconos de react-feather ya importados o por importar: Camera, Radio, Box,
  Clock, Link (o Share2), Home, Tool.
- Eliminar del archivo los imports de iconos que queden sin uso.
- La sección "Administración" completa debe desaparecer para un dueño: además
  del `soloAdmin` por item, condicionar el `menutitle` (si todos sus Items se
  filtran, no renderizar el título — ajustar `SidebarMenuItems.jsx` si hace
  falta, es un cambio de 2-3 líneas en el `.map` existente).

## T2 — Ruta por defecto

- `/` y cualquier ruta desconocida autenticada deben llevar a `/stand`
  (hoy el template redirige a `/dashboard/default`, que es un demo).
- Buscar los `Navigate`/redirects del template en `src/Route/` y en
  `AuthRoutes`/`LayoutRoutes` y apuntarlos a `/stand`.

## T3 — Header sin ruido de demo (`src/Layout/Header/`)

Quitar del header los widgets demo: selector de idioma con banderas,
notificaciones falsas (los badges "5"/"3"), bookmarks/estrella, chat, modo
carrito/email si existieran. **Conservar**: toggle del sidebar, buscador (si
funciona para navegar, si no quitarlo también), pantalla completa, y el bloque
de usuario con **Log out**.

- El Log out debe además limpiar la sesión real: llamar `cerrarSesion()` de
  `src/api/vigilanteApi.js` antes de redirigir a `/login`.

## T4 — Perfil del sidebar real

El card de perfil muestra "Emay Walter — Human Resources Department" con
seguidores falsos. Reemplazar por los datos reales de la sesión:

- Nombre: `usuarioActual()?.nombre || usuarioActual()?.email` (de
  `src/api/vigilanteApi.js`).
- Subtítulo: "Administrador" si `esAdmin()`, si no "Dueño de tienda".
- Eliminar la fila de stats (19.8k Follow / 2 year / 95.2k Follower).

## Terminado =

- [ ] Login como admin: se ven las 2 secciones (con Herramientas).
- [ ] Login como dueño demo (`demo@vigilante.test` / `Demo-1234`): solo
      "Mi negocio", sin sección Administración ni su título.
- [ ] `/` redirige a `/stand`; ninguna entrada del menú lleva a un demo.
- [ ] Header sin banderas/notificaciones falsas; Log out limpia el token y
      vuelve al login.
- [ ] Perfil del sidebar con el nombre real del usuario logueado.
- [ ] `npm run dev` sin errores ni warnings nuevos; móvil (390px) OK.
