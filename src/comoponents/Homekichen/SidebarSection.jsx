import React from "react";
// Import product images
import one from "../../images/home.webp";
import two from "../../images/home1.avif";
import three from "../../images/home2.webp";
import four from "../../images/home3.webp";
import five from "../../images/home4.avif";
import six from "../../images/home5.avif";
import saven from "../../images/home6.webp";
import eight from "../../images/home7.avif";
import nine from "../../images/home8.avif";
import ten from "../../images/home9.png";
import onee from "../../images/home10.avif";
import { Tooltip } from "@mui/material";

// Products Data
const products = [
  { name: "KIMIUP Kitchen Cutting", price: "$12.99", image: one },
  { name: "Zulay Kitchen Silicone ", price: "$9.99", image: two },
  { name: "Sunnecko Heavy Duty Kitchen ", price: "$19.99", image: three },
  { name: "LekDrok 10 Inch Microwave Food", price: "$9.99", image: four },
  { name: "Kitchen in the box ", price: "$36.88", image: five, discount: "-8%" },
  { name: "iBayam Kitchen Shears", price: "$9.99", image: six },
  { name: "KIMIUP Kitchen Cutting", price: "$12.99", image: saven },
  { name: "Zulay Kitchen Silicone ", price: "$9.99", image: eight },
  { name: "Sunnecko Heavy Duty Kitchen ", price: "$19.99", image: nine },
  { name: "LekDrok 10 Inch Microwave Food", price: "$9.99", image: onee },
  { name: "Kitchen in the box ", price: "$36.88", image: ten, discount: "-8%" },
];

const SidebarSection = () => {
  return (
    <div className="container py-5">
      <div className="row">
        {/* Sidebar */}
        <div className="col-12 col-md-3 mb-4 bg-light p-4">
          <h5>FILTER BY PRICE</h5>
          <input type="range" className="form-range" min="0" max="70" />
          <button className="btn btn-primary mt-2">FILTER</button>
          <h5 className="mt-4">STOCK STATUS</h5>
          <div>
            <input type="checkbox" id="sale" /> <label htmlFor="sale">On sale</label>
          </div>
          <div>
            <input type="checkbox" id="stock" /> <label htmlFor="stock">In stock</label>
          </div>
          <h5 className="mt-4">TOP RATED PRODUCTS</h5>
          <ul className="list-unstyled">
            <hr />
            <li className="d-flex align-items-center">
              <img style={{ width: "100px" }} src={one} alt="" />
              Sassy Stacks of Circles Stacking Ring - <span className="text-primary">$10.99</span>
            </li>
            <hr />
            <li className="d-flex align-items-center">
              <img style={{ width: "100px" }} src={three} alt="" />
              Sassy Stacks of Circles Stacking Ring - <span className="text-primary">$10.99</span>
            </li>
            <hr />
            <li className="d-flex align-items-center ">
              <img style={{ width: "100px" }} src={ten} alt="" />
              Sassy Stacks of Circles Stacking Ring - <span className="text-primary">$10.99</span>
            </li>
          </ul>
        </div>

        {/* Product Grid */}
        <div className="col-12 col-md-9">
          <div className="d-flex justify-content-between align-items-center">
            <span className="fw-bold">Home / Kitchen</span>
            <select className="form-select w-auto">
              <option>Sort by latest</option>
            </select>
          </div>
          <div className="row row-cols-3 row-cols-sm-4 row-cols-md-4 row-cols-lg-6 g-3 mt-3">
            {products.map((product, index) => (
              <div key={index} className="">
                <div className="card p-3 shadow-sm border-0 d-flex align-items-center">
                  <img
                    style={{
                      maxHeight: "100px",
                      minHeight: "100px",
                      maxWidth: "100px",
                      minWidth: "100px"
                    }}
                    src={product.image}
                    alt={product.name}
                    className="img-fluid"
                  />
                  {product.discount && (
                    <span className="badge bg-primary position-absolute">{product.discount}</span>
                  )}
                  <Tooltip title={product.name}>
                    <h6 className="mt-2">
                      {product.name.length > 10 ? `${product.name.slice(0, 10)}...` : product.name}
                    </h6>
                  </Tooltip>
                  <p className="fw-bold text-primary">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarSection;
