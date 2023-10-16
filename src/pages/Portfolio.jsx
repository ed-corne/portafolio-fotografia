import React from "react";
import { Link, Outlet } from "react-router-dom";
import categories from "../utils/categories";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import "../styles/portfolio.css";
import "../styles/gallery.css";

const Portfolio = () => {
  return (
    <div className="portfolio-page">
      <Menu />
      <div className="categories-gallery">
        {/* In this part i use a map to render all the categorys from a json document */}
        {categories.map((category) => (
          <div key={category.id} className="gallery__container-image">
             <div className="gallery__opacity"></div>
            <Link
              to={`/portafolio/${category.title}`}
              category={category.title}
              className="gallery__image"
            >
              <img
                src={category.url}
                alt={category.title}
                width="300"
                className="categories-gallery__image"
              />
              <p className="categories-gallery__text">{category.title}</p>
            </Link>
          </div>
        ))}
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
