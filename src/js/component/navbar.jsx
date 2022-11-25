import React from "react";
import logo from "../../img/logo.png";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
             <img src={logo} alt="Logo" width="30" height="24" className="logogb d-inline-block align-text-top"/>
             <a className="navbar-brand" name="main" href="#main">Ghostbusters</a>               
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="#main">Inicio <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" target="_blank" href="https://i.pinimg.com/736x/fa/06/5f/fa065f6bf29726655e818579e59976f6--ghost-busters-christmas-fun.jpg">Sobre nosotros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" target="_blank" href="https://www.youtube.com/watch?v=cU4qbnNmxWA">Servicios</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" target="_blank" href="https://www.amazon.com/Ghostbusters-Bill-Murray/dp/B000PEX1IE">Contacto</a>
                        </li>
                    </ul>
              </div>
        </nav>
        );
};



export default NavBar;