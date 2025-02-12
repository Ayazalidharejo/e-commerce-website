import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const CustomerReviews = () => {
  const reviews = [
    {
      rating: 4.5,
      title: "Great Variety of Products!",
      text: "Dhir Crick LLC offers an amazing selection across so many categories. I've found everything I need here, and the quality never disappoints!",
      verified: true,
    },
    {
      rating: 5,
      title: "Excellent Makeup Collection",
      text: "The selection at Dhir Crick LLC is unmatched, and everything I've ordered has been high quality. It's a one-stop shop for all my needs!",
      verified: true,
    },
    {
      rating: 5,
      title: "Fast Shipping",
      text: "Dhir Crick LLC customer support team is incredibly helpful and responsive. My orders arrive quickly, and I'm always impressed with the items!",
      verified: true,
    },
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Customer Reviews</h2>
      {/* <div className="text-center mb-4">
        <h4>Excellent</h4>
        <div className="text-warning">★★★★★ 4.5</div>
        <p>Based on <a href="#">192 reviews</a></p>
      </div> */}
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="card p-3 border-0 shadow-sm">
              <div className="text-warning">{"★".repeat(Math.floor(review.rating))}{"☆".repeat(5 - Math.floor(review.rating))}</div>
              <h6 className="mt-2 fw-bold">{review.title}</h6>
              <p className="small">{review.text}</p>
              {review.verified && <span className="text-success fw-bold">Verified</span>}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomerReviews;