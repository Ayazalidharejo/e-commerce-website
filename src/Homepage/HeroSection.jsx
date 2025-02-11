import React from "react";
import hero from "../images/hero.webp"
import hero2 from "../images/hero-2.webp"

const HeroSection = () => {
  return (
    <div className="containe mt-4">
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="d-flex align-items-center justify-content-between bg-primary text-white p-5 rounded">
              {/* <div>
                <h2>Discover The New Items!</h2>
                <p>Discover quality items at Dhir Crick LLC, Your go-to store for all needs.</p>
                <h3 className="fw-bold">6.99$</h3>
                <a href="https://dhircrickllc.com/shop">
                  <button className="btn btn-dark">Shop Now</button>
                </a>
              </div> */}
              <img
                className="img-fluid"
                src={hero}
                alt="Product"
              />
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex align-items-center justify-content-between bg-secondary text-white p-5 rounded">
              {/* <div>
                <h2>Special Deals Just For You!</h2>
                <p>Get the best deals on high-quality products now.</p>
                <h3 className="fw-bold">Limited Time Offer</h3>
                <a href="https://dhircrickllc.com/shop">
                  <button className="btn btn-dark">Shop Now</button>
                </a>
              </div> */}
              <img
                className="img-fluid"
                src={hero2}
                alt="Special Offer"
              />
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
