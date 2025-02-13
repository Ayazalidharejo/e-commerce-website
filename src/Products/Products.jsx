import React, { useState } from "react";
import babycream from "../images/b1.webp"
import bottle from "../images/b10.webp"
import cream from "../images/babay4.webp"
import fan from "../images/baby02.webp"
import botle from "../images/pet.webp"
import botle2 from "../images/pet5.webp"
import botle3 from "../images/home.webp"
import sampo from "../images/home2.webp"
import sampo1 from "../images/off.jpeg"
import sampo2 from "../images/off8.avif"
import sampo3 from "../images/toy.jpg"
import sampo4 from "../images/toy2.jpg"
import { useDispatch } from "react-redux";
import { addProduct } from "../Slice/Addtocart";
import { ToastContainer, toast } from 'react-toastify';
import FilterComponent from "../FilterComponent"

const products = [
  { id: 1, name: "TREL Mini Handheld Stroller Fan", category: "Baby Products", price: 29.99, image: fan },
  { id: 2, name: "Douxo S3 PYO Pads 30 Count fan", category: "Pet Supplies", price: 14.99, image: cream },
  { id: 3, name: "OLLY Ultra Strength Goodbye Stress", category: "Supplements", price: 56.00, image: bottle },
  { id: 4, name: "Matys Multipurpose Baby Ointment", category: "Baby Products", price: 14.99, image: babycream },
  { id: 5, name: "Baby Diaper Rash Cream", category: "Baby Products", price: 10.99, image: botle },
  { id: 6, name: "Dog Chew Toy", category: "Pet Supplies", price: 8.99, image: botle2 },
  { id: 7, name: "Fitness Tracker", category: "Supplements", price: 25.99, image: botle3 },
  { id: 8, name: "Protein Powder", category: "Supplements", price: 49.99, image: babycream },
  { id: 9, name: "Dog Shampoo", category: "Pet Supplies", price: 12.99, image: fan },
  { id: 10, name: "Vitamins for Kids", category: "Supplements", price: 18.99, image: sampo },
  { id: 11, name: "Laptop Stand", category: "Office Supplies", price: 32.99, image: bottle },
  { id: 12, name: "Desk Organizer", category: "Office Supplies", price: 15.99, image: babycream },
  { id: 13, name: "Wireless Mouse", category: "Office Supplies", price: 20.99, image: fan },
  { id: 14, name: "Keyboard Cleaner", category: "Office Supplies", price: 7.99, image: fan },
  { id: 15, name: "Notebook Set", category: "Office Supplies", price: 11.99, image: babycream },
  { id: 16, name: "Cat Scratcher", category: "Pet Supplies", price: 19.99, image: babycream },
  { id: 17, name: "Desk Lamp", category: "Office Supplies", price: 29.99, image: bottle },
  { id: 18, name: "Fitness Tracker", category: "Health & Wellness", price: 99.99, image: sampo },
  { id: 19, name: "Yoga Mat", category: "Health & Wellness", price: 24.99, image: cream },
  { id: 20, name: "Water Bottle", category: "Health & Wellness", price: 9.99, image: cream },
  { id: 21, name: "Dumbbells Set", category: "Health & Wellness", price: 59.99, image: cream },
  { id: 22, name: "Resistance Bands", category: "Health & Wellness", price: 14.99, image: botle },
  { id: 23, name: "Teddy Bear", category: "Toys & Games", price: 19.99, image: sampo3 },
  { id: 24, name: "Puzzle Set", category: "Toys & Games", price: 14.99, image: babycream },
  { id: 25, name: "Board Game", category: "Toys & Games", price: 24.99, image: sampo2 },
  { id: 26, name: "Remote Control Car", category: "Toys & Games", price: 39.99, image: botle3 },
  { id: 27, name: "Building Blocks", category: "Toys & Games", price: 29.99, image: botle2 },
  { id: 28, name: "Baby Bottle", category: "Baby Products", price: 9.99, image: sampo1 },
  { id: 29, name: "Baby Swaddle Blanket", category: "Baby Products", price: 19.99, image: fan },
  { id: 30, name: "Baby Teething Toy", category: "Baby Products", price: 7.99, image: sampo4 }
];

const uniqueCategories = ["All", ...new Set(products.map(p => p.category))];

const ProductGrid = () => {
const dispach =useDispatch()


  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = selectedCategory === "All" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="container my-4">
      {/* <h2 className="text-center">NEW ARRIVALS</h2>
      
      <div className="d-flex justify-content-center mb-3">
        {uniqueCategories.map(category => (
          <button 
            key={category} 
            className={`btn mx-2 ${selectedCategory === category ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div> */}
      
      <div className="row">
  {filteredProducts.map((product) => (
    <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 col-6 mb-4">
      <div className="card shadow-sm border-0 d-flex align-items-center">
        <img
          style={{
            maxWidth: "150px",
            minWidth: "150px",
            maxHeight: "140px",
            minHeight: "140px",
          }}
          src={product.image}
          alt={product.name}
          className="card-img-top p-3"
        />
        <div className="card-body text-center">
        <h6 className="card-title">
  {product.name.length > 10 ? product.name.slice(0, 10) + "..." : product.name}
</h6>

          <p className="text-muted">{product.category}</p>
          <h5 className="text-black">${product.price.toFixed(2)}</h5>
          <button
            onClick={() => dispach(addProduct(product, toast))}
            className="btn btn-warning w-100"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default ProductGrid;