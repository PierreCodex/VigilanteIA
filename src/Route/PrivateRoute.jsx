import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { haySesion } from "../api/vigilanteApi";

// Guarda simple: hay sesión = existe el JWT del backend en localStorage.
// La validación REAL del token la hace el backend en cada request (401 → login).
const PrivateRoute = () => {
  return haySesion() ? <Outlet /> : <Navigate to={`/login`} replace />;
};

export default PrivateRoute;
