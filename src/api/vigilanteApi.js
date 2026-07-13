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

// --- Slots (configurar productos) ---

export const getSlots = async () => (await api.get("/slots")).data;

export const putSlots = async (slots) => (await api.put("/slots", { slots })).data;

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
