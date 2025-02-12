// import React from "react";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
// Categories Data
const categories = [
    { name: "Baby Products", products: 14 },
    { name: "Beauty Products", products: 11 },
    { name: "Grocery & Gourmet", products: 9 },
    { name: "Home & Kitchen", products: 11 },
    { name: "Lawn, Patio & Garden", products: 3 },
    { name: "Office Products", products: 12 },
    { name: "Pet Supplies", products: 12 },
    { name: "Supplements", products: 10 },
    // { name: "Tools & Improvement", products: 4 },
    // { name: "Toys & Games", products: 10 },
    // { name: "Sports and Outdoor", products: 5 }
  ];
  
  const HomeKitchen = () => {
    return (
      <div className="bg-warning text-white py-5 text-center">
        <div className="container">
          <div className='d-flex align-items-center justify-content-center'>  <KeyboardBackspaceIcon/>
          <h1>Home & Kitchen</h1></div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3 mt-4">
            {categories.map((category, index) => (
              <div key={index} className="col">
                <div className="card text-center p-3 shadow-sm border-0">
                  <h5 className="fw-bold">{category.name}</h5>
                  <p>{category.products} Products</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default HomeKitchen;
  