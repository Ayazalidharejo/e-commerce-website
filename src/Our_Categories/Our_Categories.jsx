import React from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import "./Style.css"; // Custom CSS file
import bootle from "../images/g00.png";
import bootle1 from "../images/black.png";
import bootle2 from "../images/go11.png";
import bootle3 from "../images/juice.png";
import bootle4 from "../images/peen.png";
import bootle5 from "../images/doog.png";
import bootle6 from "../images/lipstic1.png";
import bootle8 from "../images/clear.png";


const categories = [
  { name: "Baby Products", products: 14, image: bootle, link: "/Babyproductmaine" },
  { name: "Beauty Products", products: 11, image: bootle1, link: "/Beautyproductmaine" },
  { name: "Toy and Games", products: 9, image: bootle2, link: "/Kichenmaine" },
  { name: "Home & Kitchen", products: 11, image: bootle3, link: "/Tyand_gamesmaine" },
  { name: "Office Products", products: 3, image: bootle4, link: "/OfficeProductmaine" },
  { name: "Pet's Supplies", products: 12, image: bootle5, link: "/Suplincemaine" },

];

const CategorySection = () => {
  return (
    <div className="container text-center my-5">
      <h2 className="mb-4">OUR CATEGORIES</h2>
      <div className="row g-1">
        {categories.map((category, index) => (
          <div key={index} className="col-6 col-md-4 col-lg-4 d-flex justify-content-center">
            <Link to={category.link} className={`category-card-link text-decoration-none`}>
              <div className={`category-cardse text-center border cards category-card-${index + 1}`}>
                <img
                  className="category-img"
                  src={category.image}
                  alt={category.name}
                />
              </div>
              <h5 className="mt-2 text-black">
                {category.name.length > 15 ? `${category.name.slice(0, 15)}...` : category.name}
              </h5>
              <p className="text-black">{category.products} products</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
