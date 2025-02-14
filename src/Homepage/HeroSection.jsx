import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import "./Hero.css"; // Assuming you are importing your custom styles
import hero from "../images/dogfood.png";
import hero2 from "../images/kk.png";

const Banner = () => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      modules={[Autoplay]}
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <div className="container-fluid banner">
          <div className="row align-items-center" style={{ minHeight: '500px' }}> {/* Set minHeight for equal height */}
            {/* Left Content */}
            <div className="col-lg-6 col-md-6 col-sm-12 text-white text-section pt-3 d-flex align-items-center flex-column">
              <h1 className="fw-bold text-center">Discover The New Items!</h1>
              <div className="d-flex flex-column align-items-center">
                <p className="mb-3 text-center">
                  Discover quality items at <strong>N-YIYI 346, LLC</strong>, your go-to store for all needs.
                </p>
                <div className="price-box d-flex flex-column bg-white p-3 text-black rounded-2 w-75 text-center">
                  <h2 className="price fs-1 fw-bold">9.99$</h2>
                  <button className="btn btn-dark w-75 py-2 text-center ms-5">Shop now</button>
                </div>
              </div>
              <a
                href="https://dhircrickllc.com/"
                className="link-light d-block mb-3 text-center w-100"
              >
                https://dhircrickllc.com/
              </a>
            </div>

            {/* Right Image */}
            <div className="col-lg-6 col-md-6 col-sm-12 text-center">
              <img src={hero} alt="Product 1" className="img-fluid product-image" />
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
        <div className="container-fluid banner">
          <div className="row align-items-center" style={{ minHeight: '500px' }}> {/* Set minHeight for equal height */}
            {/* Left Content */}
            <div className="col-lg-6 col-md-6 col-sm-12 text-white text-section pt-3 d-flex align-items-center flex-column">
              <h2 className="fw-bold text-center">Special Deals Just For You!</h2>
              <div className="d-flex flex-column align-items-center">
                <p className="mb-3 text-center">
                  Get the best deals on high-quality products now at <strong>N-YIYI 346, LLC</strong>.
                </p>
                <div className="price-box d-flex flex-column bg-white p-3 text-black rounded-2 w-75 text-center">
                  <h2 className="price fs-1 fw-bold">Special Price</h2>
                  <button className="btn btn-dark w-75 py-2 text-center ms-5">Shop Now</button>
                </div>
              </div>
              <a
                href="https://dhircrickllc.com/"
                className="link-light d-block mb-3 text-center w-100"
              >
                https://dhircrickllc.com/
              </a>
            </div>

            {/* Right Image */}
            <div className="col-lg-6 col-md-6 col-sm-12 text-center">
              <img src={hero2} alt="Special Offer" className="img-fluid product-image" />
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
