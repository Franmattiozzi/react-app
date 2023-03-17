import React from 'react';
import CartWidget from "../CartWidget";
import { NavLink } from "react-router-dom";


export const NavBar = () => {
  return (
    <div className="container-fluid">
        <nav className="navbar navbar-expand-lg bg-light">
            <NavLink className="navbar-brand" to="/"></NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="../index.html">Inicio</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link active" to="/categoria/products">Colecciones</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/categoria/branches">Sucursales</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="/categoria/about-us">Sobre nosotros</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" to="cart">
                        <CartWidget />
                    </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default NavBar;
