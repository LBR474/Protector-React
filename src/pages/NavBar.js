import React from "react";

import { Link } from "react-router-dom";
import "../index.css";
import { GQGame } from "./GQGame";
import { Home } from "./Home";

export const NavBar = () => {
  return (
    <div>
      <nav>
        <button>
          <Link to={"/react-three"} element={<Home />}>
            Home
          </Link>
        </button>
        &emsp;
        <button>
          <Link to={"/react-three/GQGame"} element={<GQGame />}>
            Galaxy Quest game (React)
          </Link>
        </button>
      </nav>
    </div>
  );
};
