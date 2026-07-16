/* eslint-disable no-unused-vars */
import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Signin from "../Auth/Signin";
import Loader from "../Layout/Loader";
import LayoutRoutes from "../Route/LayoutRoutes";
import { authRoutes } from "./AuthRoutes";
import PrivateRoute from "./PrivateRoute";

const Routers = () => {
  const [currentUser, setCurrentUser] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    let abortController = new AbortController();
    setAuthenticated(JSON.parse(localStorage.getItem("authenticated")));
    console.ignoredYellowBox = ["Warning: Each", "Warning: Failed"];
    console.disableYellowBox = true;
    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <BrowserRouter basename={"/"}>
      <>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path={"/"} element={<PrivateRoute />}>
              {currentUser !== null || authenticated ? (
                <>
                  <Route exact path={``} element={<Navigate to={`/stand`} />} />
                  <Route exact path={`/`} element={<Navigate to={`/stand`} />} />
                </>
              ) : (
                ""
              )}
              <Route path={`/*`} element={<LayoutRoutes />} />
            </Route>
            <Route exact path={`/login`} element={<Signin />} />
            {authRoutes.map(({ path, Component }, i) => (
              <Route path={path} element={Component} key={i} />
            ))}
          </Routes>
        </Suspense>
      </>
    </BrowserRouter>
  );
};

export default Routers;
