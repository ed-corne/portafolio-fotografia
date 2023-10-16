import React from "react";
import Menu from "../components/Menu";
import { Link } from "react-router-dom";
import "../styles/home.css";
import SocialMediaBar from "../components/SocialMediaBar";
import Logo from "../components/Logo";
import DarkMode from "../components/DarkMode";

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-page__logo">
        <Logo />
        <DarkMode/>
      </div>
      <SocialMediaBar />
      <div className="home-page__container">
        <div className="card-presentation">
          <h1 className="card-presentation__name">Edwin Cornejo</h1>
          <h2 className="card-presentation__ocupation">Fotografo</h2>
          <div className="card-presentation__buttons">
            <Link to="/portafolio" className="card-presentation__link">
              Portafolio
            </Link>
            <Link
              to="/contacto"
              className="card-presentation__link card-presentation__link--opacity"
            >
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
