import React from "react";
import { Link } from "react-router-dom"; // Make sure to import Link from react-router-dom
import one from "../../images/than.png";
import two from "../../images/cur.png";

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      title: "BOOTAA 29” LARGE DART BOARD",
      description: "Fun, dart board games will improve attention levels, hand-eye coordination.",
      price: "$15.99",
      image: one,
      bgColor: "#E8F41C",
      link: "/Kichenmaine", // Link for the first product
    },
    {
      id: 2,
      title: "BREAKFAST SANDWICH MAKER",
      description: "Breakfast sandwich maker cooks your custom sandwich in just a few minutes.",
      price: "$46.99",
      image: two,
      bgColor: "#274CFA",
      link: "/Tyand_gamesmaine", // Link for the second product
    },
  ];

  return (
    <div className="container my-4">
      <div className="row g-3">
        {products.map((product) => (
          <div key={product.id} className="col-12 col-md-6">
            <Link to={product.link} className="text-decoration-none"> {/* Adding Link to wrap the card */}
              <div
                className="p-4 d-flex flex-column flex-md-row align-items-center justify-content-between rounded"
                style={{ backgroundColor: product.bgColor }}
              >
                <div className="text-light">
                  <h3 className="fw-bold">{product.title}</h3>
                  <p className="text-black fw-bold">{product.description}</p>
                  <h4 className="fw-bold">ONLY FOR <span className="text-dark">{product.price}</span></h4>
                  <button className="btn btn-dark mt-2">SHOP NOW!</button>
                </div>
                <img
                  src={product.image}
                  alt={product.title}
                  className="img-fluid mt-3 mt-md-0"
                  style={{ maxWidth: "200px", borderRadius: "10px" }}
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductShowcase;
