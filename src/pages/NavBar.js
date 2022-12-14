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
          <Link to={"/Protector-React"} element={<Home />}>
            Home
          </Link>
        </button>
        &emsp;
        <button>
          <Link to={"/Protector-React/GQGame"} element={<GQGame />}>
            Galaxy Quest game (React)
          </Link>
        </button>
      </nav>
    </div>
  );
};
