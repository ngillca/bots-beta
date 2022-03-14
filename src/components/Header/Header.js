import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav>
        <div>
          <div>
            <h1>LOGO</h1>
          </div>

          <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/">News</NavLink>
            <NavLink to="/">Games</NavLink>
            <NavLink to="/">Blog</NavLink>
            <button>Meep</button>
          </div>
        </div>
      </nav>
    </>
  );
}
