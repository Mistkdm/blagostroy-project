import logo from "./../../img/Logo.svg";
import "./style.css";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg header-bg">
      <div className="container">
        <NavLink to="/" className="navbar-brand p-0">
          <img src={logo} alt="Logo" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav offset-md-5 navbar-text">
            <li className="nav-item">
              <a className="nav-link" href="index.html">
                Плитка
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Калькулятор
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Галерея
              </a>
            </li>
            <li className="nav-item">
              <NavLink to="/contacts" className="nav-link">
                Контакты
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/services" className="nav-link">
                Услуги
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
