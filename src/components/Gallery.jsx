import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  portraits,
  street,
  conceptual,
  events,
  landscape,
  products,
} from "../utils/photos";
import "../styles/gallery.css";

const Gallery = () => {
  const navigate = useNavigate();
  //
  const params = useParams();

  return (
    <>
      <div className="gallery__return">
        <button onClick={() => navigate(-1)} className="gallerry__button">
          Regresar
        </button>
      </div>
      <h2 className="gallery__category">{params.category}Retratos</h2>

      <div className="gallery">
        {portraits.map((photo) => (
          <div className="gallery__container-image" key={photo.id}>
            <div className="gallery__opacity"></div>
            <img src={photo.url} alt={photo.title} className="gallery__image" />
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
