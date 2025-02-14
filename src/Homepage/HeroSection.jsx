// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/autoplay";
// import { Autoplay } from "swiper/modules";
// import "./Hero.css"; // Assuming you are importing your custom styles
// import hero from "../images/dogfood.png";
// import hero2 from "../images/kk.png";

// const Banner = () => {
//   return (
//     <div>
//       {/* Swiper for medium and larger screens */}
//       <div className="d-none d-md-block">
//         <Swiper
//           spaceBetween={0}
//           slidesPerView={1}
//           autoplay={{ delay: 3000, disableOnInteraction: false }}
//           loop={true}
//           modules={[Autoplay]}
//         >
//           {/* Slide 1 */}
//           <SwiperSlide>
//             <div className="container-fluid banner">
//               <div className="row align-items-center" style={{ minHeight: '500px' }}>
//                 {/* Left Content */}
//                 <div className="col-lg-6 col-md-6 col-sm-12 text-white text-section pt-3 d-flex align-items-center flex-column">
//                   <h1 className="fw-bold text-center heading">Discover The New Items!</h1>
//                   <div className="row d-flex align-items-center justify-content-center">
//                     <div className="col-6">
//                       <p className="mb-3 text-center fs-5 ps-5 mb-5 pt-4 para">
//                         Discover quality items at <strong>N-YIYI 346</strong>, your go-to store for all needs.
//                       </p>
//                       <a href="#" className="link-light d-block text-center w-100 ps-5 mt-5">
//                         info@nyiy346.com
//                       </a>
//                     </div>
//                     <div className="col-6">
//                       <div className="price-box d-flex flex-column bg-white p-3 text-black rounded-2 w-75 text-center btn1">
//                         <h2 className="price fs-1 fw-bold">6.99$</h2>
//                         <button className="btn btn-dark w-75 py-2 text-center ms-4">Shop Now</button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 {/* Right Image */}
//                 <div className="col-lg-6 col-md-6 col-sm-12 text-center">
//                   <img src={hero2} alt="Special Offer" className="img-fluid product-image" />
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>

//           {/* Slide 2 */}
//           <SwiperSlide>
//             <div className="container-fluid banner">
//               <div className="row align-items-center" style={{ minHeight: '500px' }}>
//                 {/* Left Content */}
//                 <div className="col-lg-6 col-md-6 col-sm-12 text-white text-section pt-3 d-flex align-items-center flex-column">
//                   <h2 className="fw-bold text-center heading">Special Deals Just For You!</h2>
//                   <div className="row d-flex align-items-center">
//                     <div className="col-6">
//                       <p className="mb-3 text-center fs-5 ps-5 mb-5 pt-4">
//                         Get the best deals on high-quality products now at <strong>N-YIYI 346</strong>.
//                       </p>
//                       <a href="#" className="link-light d-block text-center w-100 ps-5 mt-5">
//                         info@nyiy346.com
//                       </a>
//                     </div>
//                     <div className="col-6">
//                       <div className="price-box d-flex flex-column bg-white p-3 text-black rounded-2 w-75 text-center">
//                         <h2 className="price fs-1 fw-bold">10.99$</h2>
//                         <button className="btn btn-dark w-75 py-2 text-center ms-4">Shop Now</button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 {/* Right Image */}
//                 <div className="col-lg-6 col-md-6 col-sm-12 text-center">
//                   <img src={hero2} alt="Special Offer" className="img-fluid product-image" />
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         </Swiper>
//       </div>

//       {/* Section for small screens (below md) */}
//       {/* <div className="d-block d-md-none">
//         <div className="container text-center py-5">
//           <h3>Special Offers for Mobile Users</h3>
//           <p>Browse our exclusive deals designed for mobile users below:</p>
//           <div className="row">
//             <div className="col-6 mb-3">
//               <img src={hero} alt="Mobile Offer 1" className="img-fluid" />
//               <h5>Offer 1</h5>
//               <p>Only $6.99</p>
//             </div>
//             <div className="col-6 mb-3">
//               <img src={hero2} alt="Mobile Offer 2" className="img-fluid" />
//               <h5>Offer 2</h5>
//               <p>Special Discount Available!</p>
//             </div>
//           </div>
//         </div>
//       </div> */}
//     </div>
//   );
// };

// export default Banner;
// // 










import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import "./Hero.css"; // Assuming you are importing your custom styles
import hero from "../images/than.png";
import hero2 from "../images/kk.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      {/* Swiper for medium and larger screens */}
      <div className="d-none d-md-block">
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
              <div className="row align-items-center" style={{ minHeight: '500px' }}>
                {/* Left Content */}
                <div className="col-lg-6 col-md-6 col-sm-12 text-white text-section pt-3 d-flex align-items-center flex-column">
                  <h1 className="fw-bold text-center heading">Discover The New Items!</h1>
                  <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-6">
                      <p className="mb- text-center fs-5 ps-5 mb- pt-4 para">
                        Discover quality items at <strong>N-YIYI 346</strong>, your go-to store for all needs.
                        <a href="#" className="link-light d-block text-center w-100 ps- mt-">
                        info@nyiy346.com
                      </a>
                      </p>
                     
                    </div>
                    <div className="col-5 mt-5">
                      <div className="price-box d-flex flex-column bg-white p-3 text-black rounded-2 w-75 text-center btn1">
                        <h2 className="price fs-1 fw-bold ps-4">6.99$</h2>
                        <Link to="/Kichenmaine">   <button className="btn btn-dark w-75 py-2 text-center ms-4">Shop Now</button> </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Right Image */}
                <div className="col-lg-6 col-md-6 col-sm-12 text-center">
                  <img style={{height:"500px",width:"650px"}} src={hero} alt="Special Offer" className=" product-image" />
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="container-fluid banner">
              <div className="row align-items-center" style={{ minHeight: '500px' }}>
                {/* Left Content */}
                <div className="col-lg-6 col-md-6 col-sm-12 text-white text-section pt-3 d-flex align-items-center flex-column">
                  <h2 className="fw-bold text-center heading">Special Deals Just For You!</h2>
                  <div className="row d-flex align-items-center">
                    <div className="col-6">
                      <p className=" text-center fs-5 ps-5 ">
                        Get the best deals on high-quality products now at <strong>N-YIYI 346</strong>.
                        <a href="#" className="link-light d-block text-center w-100 ps- mt-">
                        info@nyiy346.com
                      </a>
                      </p>
                      
                    </div>
                    <div className="col-5 mt-3">
                      <div className="price-box d-flex flex-column bg-white p-3 text-black rounded-2 w-75 text-center">
                        <h2 className="price fs-1 fw-bold ps-4">10.99$</h2>
                      <Link to="/Kichenmaine">   <button className="btn btn-dark w-75 py-2 text-center ms-4">Shop Now</button> </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Right Image */}
                <div className="col-lg-6 col-md-6 col-sm-12 text-center">
                  <img src={hero2} alt="Special Offer" className="img-fluid product-image" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>







      {/* Swiper for small screens (below md) */}
      <div className="d-block d-md-none">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          modules={[Autoplay]}
        >
          {/* Slide 1 for small screens */}
          {/* <SwiperSlide>
            <div className="container-fluid banner">
              <div className="row align-items-center" style={{ minHeight: '300px' }}>
               
                <div className="col-lg-6 col-md-6 col-sm-12 text-white text-section d-flex align-items-center flex-column">
                  <h2 className="fw-bold text-center heading py-3">Discover The <br /> New Items!</h2>
                  <div className="row d-flex align-items-center">
                    <div className="col-6">
                      <p className=" text-center  para ms-1 ">
                        Get the best deals on high-quality products now at <strong>N-YIYI 346</strong>. <br />
                        info@nyiy346.com
                     
                      </p>
                     
                    </div>
                    <div className="col-6">
                      <div className="price-box d-flex flex-column bg-white p-3 text-black rounded-2  text-center mt-5">
                        <h2 className="price fs-6 fw-bold">10.99$</h2>
                        <Link to="/Kichenmaine">   <button className="btn btn-dark w-75 py-2 text-center ms-4">Shop Now</button> </Link>
                      </div>
                    </div>
                    <img style={{height:"200px",width:"400px"}} className="p-2" src={hero2} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide> */}
          <SwiperSlide>
            <div className="container-fluid banner">
              <div className="row align-items-center" style={{ minHeight: '300px' }}>
                {/* Left Content */}
                <div className="col-lg-6 col-md-6 col-sm-12 text-white text-section d-flex align-items-center flex-column">
                  <h2 className="fw-bold text-center heading py-3">Discover The <br /> New Items!
                  
                  </h2>
                  <div className="row d-flex align-items-center">
                    <div className="col-5">
                      <p className=" text-center  para ms-1 ">
                        Get the best deals on high-quality products now at <strong>N-YIYI 346 <br />
                    
                        info@nyiy346.com
                     
                        </strong>.
                        
                      </p>
                     
                    </div>
                    <div className="col-7 pe-5  ">
                      <div className="price-box d-flex flex-column bg-white p-3 text-black rounded-2   text-center">
                        <h2 className="price fs-6 fw-bold ps-2">6.99$</h2>
                        <Link className="d-flex w-100 align-items-center" to="/Kichenmaine">
  <button className="btn btn-dark w-75 py-2 text-center  shopbtn ms-4">
    Shop Now
  </button>
</Link>

                      </div>
                    </div>
                    <img style={{height:"200px",width:"400px"}} className="p-2" src={hero} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 for small screens */}
          <SwiperSlide>
            <div className="container-fluid banner">
              <div className="row align-items-center" style={{ minHeight: '300px' }}>
                {/* Left Content */}
                <div className="col-lg-6 col-md-6 col-sm-12 text-white text-section d-flex align-items-center flex-column">
                  <h2 className="fw-bold text-center heading py-3">Discover The <br /> New Items!
                  
                  </h2>
                  <div className="row d-flex align-items-center">
                    <div className="col-5">
                      <p className=" text-center  para ms-1 ">
                        Get the best deals on high-quality products now at <strong>N-YIYI 346 <br />
                    
                        info@nyiy346.com
                     
                        </strong>.
                        
                      </p>
                     
                    </div>
                    <div className="col-7 pe-5  ">
                      <div className="price-box d-flex flex-column bg-white p-3 text-black rounded-2   text-center">
                        <h2 className="price fs-6 fw-bold ps-2">6.99$</h2>
                        <Link className="d-flex w-100 align-items-center" to="/Kichenmaine">
  <button className="btn btn-dark w-75 py-2 text-center  shopbtn ms-4">
    Shop Now
  </button>
</Link>

                      </div>
                    </div>
                    <img style={{height:"200px",width:"400px"}} className="p-2" src={hero2} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
