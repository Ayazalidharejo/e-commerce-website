import React from "react";
import "./Style.css"
import bootle from "../images/brush1.jpg";
import bootle1 from "../images/cream001.png";
import bootle2 from "../images/clear.png";
import bootle3 from "../images/black.png";
import bootle4 from "../images/bootlee.png";
import bootle5 from "../images/hand.png";
import bootle6 from "../images/lipstic1.png";
import bootle8 from "../images/clear.png";


const categories = [
  { name: "Baby Products", products: 14, image: bootle },
  { name: "Beauty Products", products: 11, image: bootle1 },
  { name: "Grocery & Gourmet", products: 9, image: bootle2 },
  { name: "Home & Kitchen", products: 11, image: bootle3 },
  { name: "Lawn, Patio & Garden", products: 3, image: bootle4 },
  { name: "Office Products", products: 12, image: bootle5 },
  { name: "Pet Supplies", products: 12, image: bootle6 },
  { name: "Supplements", products: 10, image: bootle8 },
 
];

// Array of background colors to cycle through
const bgColors = [
  "bg-danger", "bg-primary", "bg-success", "bg-warning", "bg-info", 
  "bg-dark", "bg-secondary", "bg-secondary", "bg-primary", "bg-primary"
];

const CategorySection = () => {
  return (
    <div className="container text-center my-5">
      <h2 className="mb-4">OUR CATEGORIES</h2>
      <div className="row g-4">
        {categories.map((category, index) => (
          <div key={index} className="col-6 col-md-5 col-lg-3 d-flex justify-content-center ">
            <div>
              {/* Apply a unique background color from the bgColors array */}
              <div className={`category-cardse text-center border cards  ${bgColors[index % bgColors.length]}`}>
                <img
                  className="category-img"
                  src={category.image}
                  alt={category.name}
                />
              </div>
              <h5 className="mt-2">
  {category.name.length > 12 ? `${category.name.slice(0, 12)}...` : category.name}
</h5>

              <p>{category.products} products</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
