import React from "react";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Link } from 'react-router-dom'; // Import Link for navigation

// Categories Data with links for each category
const categories = [
  { name: "Baby Products", products: 14, link: "/Babyproductmaine" },
  { name: "Beauty Products", products: 11, link: "/Beautyproductmaine" },
  { name: "Home & Kitchen", products: 11, link: "/Kichenmaine" },
  { name: "Toy and Games", products: 3, link: "/Tyand_gamesmaine" },
  { name: "Office Products", products: 12, link: "/OfficeProductmaine" },
  { name: "Pet Supplies", products: 12, link: "/Suplincemaine" },
];

const HomeKitchen3 = () => {
  return (
    <div className="bg-warning text-white py-5 text-center">
      <div className="container">
        <div className='d-flex align-items-center justify-content-center'>
          <KeyboardBackspaceIcon />
          <h1>Home & Kitchen</h1>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3 mt-4">
          {categories.map((category, index) => (
            <div key={index} className="col">
              {/* Link wrapping the entire card */}
              <Link to={category.link} className="text-decoration-none">
                <div className="card text-center p-3 shadow-sm border-0">
                  <h5 className="fw-bold">{category.name}</h5>
                  <p>{category.products} Products</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeKitchen3;
