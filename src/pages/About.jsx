import React from "react";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import img1 from "../assets/yo2.jpg";
import "../styles/about.css";
import Logo from "../components/Logo";

const About = () => {
  return (
    <div className="card">
      <Menu></Menu>

      <div className="card__content">
        <h2 className="card__h2">!Hola!</h2>
        <h3 className="card__h3">Mi Nombre es</h3>
        <h4 className="card__h4">Edwin Joel Cornejo Chavez</h4>
        <p className="card__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          vulputate dictum ligula mattis tristique. Suspendisse nec lobortis
          nibh. Nulla ut dui condimentum, rhoncus elit ac, dictum mauris.
          Phasellus et urna id erat fermentum convallis non interdum orci.
          Pellentesque ex nisi, auctor vel neque in, pulvinar varius massa.
          Aliquam semper nibh mi, eleifend pharetra lorem molestie a. Donec
          vestibulum semper lacus, ac sit amet dolor vel odio tempus mattis. In
          ac mauris vitae vehicula efficitur non ut arc. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Integer vulputate dictum ligula
          mattis tristique. Suspendisse nec lobortis nibh. Nulla ut dui
          condimentum, rhoncus elit ac, dictum mauris. Phasellus et urna id erat
          fermentum convallis non interdum orci. Pellentesque ex nisi, auctor
          vel neque in, pulvinar varius massa. Aliquam semper nibh mi, eleifend
          pharetra lorem molestie a. Donec vestibulum semper lacus, ac sit amet
          dolor vel odio tempus mattis. In ac mauris vitae vehicula efficitur
          non ut arc.
        </p>
      </div>
      <div className="card__image">
        <img src={img1} alt="" width={300} />
      </div>

      <Footer />
    </div>
  );
};

export default About;
