// Cliente HTTP hacia el backend VigilanteIA (FastAPI, /api/panel/v1).
// Única pieza del frontend que conoce la API: las vistas solo llaman estas funciones.
import axios from "axios";

const TOKEN_KEY = "vigilante_token";
const USUARIO_KEY = "vigilante_usuario";

export const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL || "http://localhost:8000"}/api/panel/v1`,
  timeout: 30000,
});

// Bearer en cada request; 401 = sesión vencida → limpiar y volver al login.
api.interceptors.request.use((config) => {
  const token = localStorage.getItem(TOKEN_KEY);
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (res) => res,
  (error) => {
    if (error.response?.status === 401 && !error.config?.url?.includes("/auth/login")) {
      cerrarSesion();
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

// --- Sesión ---

export const iniciarSesion = async (email, password) => {
  const { data } = await api.post("/auth/login", { email, password });
  localStorage.setItem(TOKEN_KEY, data.token);
  localStorage.setItem(USUARIO_KEY, JSON.stringify(data.usuario));
  localStorage.setItem("login", JSON.stringify(true)); // compat con PrivateRoute del template
  return data.usuario;
};

export const cerrarSesion = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USUARIO_KEY);
  localStorage.removeItem("login");
};

export const haySesion = () => Boolean(localStorage.getItem(TOKEN_KEY));

export const usuarioActual = () => {
  try {
    return JSON.parse(localStorage.getItem(USUARIO_KEY)) || null;
  } catch {
    return null;
  }
};

export const esAdmin = () => usuarioActual()?.rol === "admin";

// --- Stand / Monitoreo ---

export const getStandActual = async () => (await api.get("/stand/actual")).data;

export const capturarAhora = async () => (await api.post("/stand/capturar")).data;

export const getMonitoreo = async () => (await api.get("/monitoreo")).data;

// Estado de confirmación del stand + checklist de requisitos (sin probar el POS en vivo).
export const getConfirmacionStand = async () =>
  (await api.get("/stand/confirmacion")).data;

// Confirma el stand (valida requisitos + prueba el POS en vivo). Si algún requisito falla,
// responde 200 con { confirmado:false, requisitos:[...] } — no lanza; la vista muestra el checklist.
export const confirmarStand = async () => (await api.post("/stand/confirmar")).data;

// Vuelve al modo instalación (deja de contar) para reacomodar el estante.
export const desconfirmarStand = async () => (await api.delete("/stand/confirmar")).data;

// Cuenta la última foto bajo demanda y la registra en el Historial (botón "Analizar").
// Timeout amplio: la IA puede pasar los 30s por defecto del cliente.
export const analizarStand = async () =>
  (await api.post("/stand/analizar", null, { timeout: 90000 })).data;

// URL objeto (blob) de la última captura cruda en disco, para dibujar slots en instalación.
// Va por axios (no <img src>) porque necesita el header Bearer. Recordá revocar el objectURL.
export const getUltimaCapturaBlob = async () => {
  const { data } = await api.get("/stand/ultima-captura", { responseType: "blob" });
  return URL.createObjectURL(data);
};

// Cada cuánto vigila una cámara. minutos: 0 (apagado) | 5 | 15 | 30 | 60.
export const setIntervalo = async (mac, minutos) =>
  (await api.put(`/nodos/${encodeURIComponent(mac)}/intervalo`, { minutos })).data;

// --- Slots (configurar productos) ---

export const getSlots = async () => (await api.get("/slots")).data;

export const putSlots = async (slots) => (await api.put("/slots", { slots })).data;

// Auto-detección: la IA propone recuadros (sin etiqueta) sobre la última foto. No persiste;
// el editor los carga para que el dueño solo escriba el código. Timeout amplio (la IA tarda).
export const detectarSlots = async () =>
  (await api.post("/slots/detectar", null, { timeout: 90000 })).data;

// ¿El sistema de ventas conoce este código? Devuelve { verificado, existe, nombre, stock }.
// Ojo con los TRES estados: verificado=false NO significa "código malo", significa "no
// pudimos preguntar" (POS caído). Nunca lo pintes como error del dueño.
export const validarSku = async (sku) =>
  (await api.get("/slots/validar-sku", { params: { sku } })).data;

// --- Historial ---

export const getEventos = async ({ sku, desde, hasta, pagina = 1, porPagina = 100 } = {}) => {
  const params = { pagina, por_pagina: porPagina };
  if (sku) params.sku = sku;
  if (desde) params.desde = desde;
  if (hasta) params.hasta = hasta;
  return (await api.get("/eventos", { params })).data;
};

// --- Conciliación (Etapa D) ---

export const getDiscrepancias = async ({ sku, desde, hasta } = {}) => {
  const params = {};
  if (sku) params.sku = sku;
  if (desde) params.desde = desde;
  if (hasta) params.hasta = hasta;
  return (await api.get("/discrepancias", { params })).data;
};

export const getIntegracion = async () => (await api.get("/integracion")).data;

export const putIntegracion = async (payload) =>
  (await api.put("/integracion", payload)).data;

export const probarIntegracion = async () =>
  (await api.post("/integracion/probar")).data;

// --- Administración (solo rol admin) ---

export const getTenants = async () => (await api.get("/admin/tenants")).data;

export const crearTenant = async (payload) =>
  (await api.post("/admin/tenants", payload)).data;

// Mensaje legible de un error de axios (detail de FastAPI o genérico).
export const mensajeDeError = (error) =>
  error.response?.data?.detail ||
  (error.request && !error.response
    ? "No se pudo conectar con el servidor"
    : "Algo salió mal, intenta de nuevo");
