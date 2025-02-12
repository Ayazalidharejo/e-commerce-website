import React from "react";
import image from "../images/dogfood.png"


const FoodSection = () => {
  return (
    <>
    <h3 className="text-center mt-5">DISCOUNTED PRODUCTS</h3>
   
    <div className="container-fluid py-5">
      <div className="row align-items-center bg-warning text-dark px-4 py-5">
        <div className="col-md-6 text-center text-md-start">
          <p className="small">Pet Supplies</p>
          <h2 className="fw-bold">Shop Pet Food and Items Now !</h2>
          <button className="btn btn-primary mt-3">BUY NOW</button>
        </div>
        <div className="col-md-6 text-center">
          <img src={image} alt="Pet Food" className="img-fluid" />
        </div>
      </div>
      
    </div>
    </>
  );
};

export default FoodSection;