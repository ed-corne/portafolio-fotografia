import React from "react";
import { Link } from "react-router-dom";
import "../styles/menu.css";
import Logo from "./Logo";
import DarkMode from "./DarkMode";

const Menu = () => {
  return (
    <nav className="menu">
      <Logo />
      <ul className="menu__list">
        <li className="menu__item">
          <Link to={"/"} className="menu__link">
            Inicio
          </Link>
        </li>
        <li className="menu__item">
          <Link to={"/portafolio"} className="menu__link">
            Portafolio
          </Link>
        </li>
        <li className="menu__item">
          <Link to={"/biografia"} className="menu__link">
            Biografia
          </Link>
        </li>
        <li className="menu__item">
          <Link to={"/contacto"} className="menu__link">
            Contacto
          </Link>
        </li>
        <li className="menu__item">
          <DarkMode />
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
