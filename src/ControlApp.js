import React from "react";

import { Route, Routes, Outlet } from "react-router-dom";

import { Home } from "./pages/Home";
import { NavBar } from "./pages/NavBar";
import { GQGame } from "./pages/GQGame";

import "./index.css";

const AppLayout = () => (
  <>
    <NavBar />

    <Outlet />
  </>
);

export function ControlApp() {
  return (
    <>
      <Routes>
        <Route path="/Protector-React/GQGame" element={<GQGame />} />
        <Route element={<AppLayout />}>
          <Route path="/Protector-React" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default ControlApp;
