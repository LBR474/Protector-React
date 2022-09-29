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
<<<<<<< HEAD
        <Route path="/GQGame" element={<GQGame />} />
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
=======
        <Route path="/GQGame" element={<GQGame />} />
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
>>>>>>> 41156a7d378eff608ddd49b240ff90cade2a279c
        </Route>
      </Routes>
    </>
  );
}

export default ControlApp;
