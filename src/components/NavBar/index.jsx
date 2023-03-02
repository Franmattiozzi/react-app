import React from 'react';
import CartWidget from "../CartWidget";


export const NavBar = () => {
  return (
            <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#"></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="../index.html">Inicio</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" href="colecciones.html">Colecciones</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="dondeEstamos.html">Sucursales</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="sobreNostros.html">Sobre nosotros</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="productos.html">Comprar</a>
                    </li>
                </ul>
            </div>
            <CartWidget />
        </div>
    </nav>
  )
}

export default NavBar;
