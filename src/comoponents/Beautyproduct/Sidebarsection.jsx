import React from "react";
// Import product images
import baby from "../../images/b1.webp";
import baby1 from "../../images/b2.webp";
import baby2 from "../../images/b3.avif";
import baby3 from "../../images/b4.webp";
import baby4 from "../../images/b5.webp";
import baby5 from "../../images/b6.webp";
import baby6 from "../../images/b7.webp";
import baby7 from "../../images/b8.avif";
import baby8 from "../../images/b9.webp";
import baby9 from "../../images/b10.webp";



// Products Data
const products = [
  { name: "KIMIUP Kitchen Cutting", price: "$12.99", image: baby },
  { name: "Zulay Kitchen Silicone ", price: "$9.99", image: baby1 },
  { name: "Sunnecko Heavy Duty Kitchen ", price: "$19.99", image: baby2 },
  { name: "LekDrok 10 Inch Microwave Food", price: "$9.99", image: baby3 },
  { name: "Kitchen in the box ", price: "$36.88", image: baby4, discount: "-8%" },
  { name: "iBayam Kitchen Shears", price: "$9.99", image: baby5 },
  { name: "KIMIUP Kitchen Cutting", price: "$12.99", image: baby6 },
  { name: "Zulay Kitchen Silicone ", price: "$9.99", image: baby7 },
  { name: "Sunnecko Heavy Duty Kitchen ", price: "$19.99", image: baby8 },
  { name: "LekDrok 10 Inch Microwave Food", price: "$9.99", image: baby9 },
  { name: "Kitchen in the box ", price: "$36.88", image: baby1, discount: "-8%" },
 
];

const SidebarSection = () => {
  return (
    <div className="container py-5">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3 bg-light p-4">
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
              <img style={{ width: "100px" }} src={baby} alt="" />
              Sassy Stacks of Circles Stacking Ring - <span className="text-primary">$10.99</span>
            </li>
            <hr />
            <li className="d-flex align-items-center">
              <img style={{ width: "100px" }} src={baby1} alt="" />
              Sassy Stacks of Circles Stacking Ring - <span className="text-primary">$10.99</span>
            </li>
            <hr />
            <li className="d-flex align-items-center ">
              <img style={{ width: "100px" }} src={baby3} alt="" />
              Sassy Stacks of Circles Stacking Ring - <span className="text-primary">$10.99</span>
            </li>
          </ul>
        </div>

        {/* Product Grid */}
        <div className="col-md-9">
          <div className="d-flex justify-content-between align-items-center">
            <span className="fw-bold">Home /Beauty Product</span>
            <select className="form-select w-auto">
              <option>Sort by latest</option>
            </select>
          </div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mt-3">
            {products.map((product, index) => (
              <div key={index} className="col">
                <div className="card p-3 shadow-sm border-0 d-flex align-item-center">
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
                  <h6 className="mt-2">{product.name}</h6>
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
