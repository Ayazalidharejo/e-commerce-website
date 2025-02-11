import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style.css"; // Custom CSS file
import Cream from "../images/cream.png"

const categories = [
  {
    title: "Toys & Games",
    subtitle: "FUN, LEARNING & SMART",
    image: Cream,
  },
  {
    title: "Baby PRODUCTS",
    image: Cream,
  },
  {
    title: "HEALTH & BEAUTY",
    subtitle: "Skincare for all skin types.",
    image:Cream,
  },
  {
    title: "Lawn, Patio & GARDEN",
    button: "SHOP NOW",
    image: Cream,
  },
];

const Fashioncards = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        {categories.map((category, index) => (
          <div className="col-md-3 col-sm-6 mb-4" key={index}>
            <div className="category-card">
              <img src={category.image} alt={category.title} className="img-fluid" />
              <div className="overlay">
                <h4>{category.title}</h4>
                {category.subtitle && <p>{category.subtitle}</p>}
                {category.button && <button className="btn btn-success">{category.button}</button>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fashioncards;
