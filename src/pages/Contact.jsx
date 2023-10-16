import React from "react";
import Menu from "../components/Menu";
import "../styles/contact.css";
import Footer from "../components/Footer";
import img1 from "../assets/yo2.jpg";

const Contact = () => {
  return (
    <div className="contact-page">
      <Menu></Menu>

      <form action="" className="form">
        <h2 className="form__tittle">Para agendar o consultas</h2>
        {/* <img src={img1} alt="" width={250}  height={380} className="form__image"/>*/}
        <div>
          <div className="form__field">
            <label htmlFor="name" className="form__label">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              className="form__input"
              placeholder="... "
            />
          </div>
          <div className="form__field">
            <label htmlFor="email" className="form__label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form__input"
              placeholder="ejemplo@gmail.com"
            />
          </div>
          <div className="form__field">
            <label htmlFor="phone" className="form__label">
              Telefono
            </label>
            <input
              type="number"
              id="phone"
              className="form__input"
              placeholder="... "
            />
          </div>
          <div className="form__field">
            <label htmlFor="subject" className="form__label">
              Asunto
            </label>
            <input
              type="text"
              id="subject"
              className="form__input"
              placeholder="... "
            />
          </div>
        </div>
        <div className="form__colum2">
          <div className="form__field">
            <label htmlFor="message" className="form__label">
              Mensaje
            </label>
            <textarea
              id="menssage"
              className="form__input form__input--area"
              placeholder="... "
            ></textarea>
            <div className="form__field">
              <button className="form__send">Enviar</button>
            </div>
          </div>
        </div>
      </form>

      <Footer />
    </div>
  );
};

export default Contact;
