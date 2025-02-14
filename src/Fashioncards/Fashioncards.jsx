import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style.css"; // Custom CSS file
import Cream from "../images/eight.avif";
import Cream2 from "../images/bag5.avif";
import Cream3 from "../images/saven.jpg";
import Cream4 from "../images/nine.avif";

const categories = [
  {
    title: "Toys & Games",
    subtitle: "FUN, LEARNING & SMART",
    image: Cream,
  },
  {
    title: "Baby PRODUCTS",
    image: Cream2,
  },
  {
    title: "HEALTH & BEAUTY",
    subtitle: "Skincare for all skin types.",
    image: Cream3,
  },
  {
    title: "Lawn, Patio & GARDEN",
    button: "SHOP NOW",
    image: Cream4,
  },
  // You can add more categories if you need 6 or more items
  // {
  //   title: "Toys & Games",
  //   subtitle: "FUN, LEARNING & SMART",
  //   image: Cream,
  // },
  // {
  //   title: "Baby PRODUCTS",
  //   image: Cream2,
  // },
];

const Fashioncards = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        {categories.map((category, index) => (
          <div className="col-6 col-sm-4 col-md-3 mb-4" key={index}>
            <div className="category-card">
              <img style={{maxHeight:"200px",minHeight:"200px"}} src={category.image} alt={category.title} className="img-fluid" />
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
