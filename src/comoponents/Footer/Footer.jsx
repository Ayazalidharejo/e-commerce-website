import React from "react";
import ft from "../../images/ft.png"


const Footer = () => {
  return (
    <footer className="bg-warning text-white py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5 className="mb-3">Mr Bean</h5>
            <p>Business Address: 2200 W BAKER RD APT 312 BAYTOWN TX 77521</p>
            <p>Phone Number: +1 (361) 522-1768</p>
            <p>Email: info@mrbean.com</p>
          </div>
          <div className="col-md-2">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Home</a></li>
              <li><a href="#" className="text-white">Shop</a></li>
              <li><a href="#" className="text-white">Cart</a></li>
              <li><a href="#" className="text-white">Checkout</a></li>
              <li><a href="#" className="text-white fw-bold">Contact us</a></li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5 className="mb-3">Info Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Return Policy</a></li>
              <li><a href="#" className="text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-white">About us</a></li>
              <li><a href="#" className="text-white">Wishlist</a></li>
              <li><a href="#" className="text-white">Compare</a></li>
            </ul>
          </div>
          <div className="col-md-2">
            <h5 className="mb-3">Top Categories</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Home & Kitchen</a></li>
              <li><a href="#" className="text-white">Baby Products</a></li>
              <li><a href="#" className="text-white">Toys & Games</a></li>
              <li><a href="#" className="text-white">Office Products</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className="mb-3">Account Details</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Dashboard</a></li>
              <li><a href="#" className="text-white">Orders</a></li>
              <li><a href="#" className="text-white">Downloads</a></li>
              <li><a href="#" className="text-white">Addresses</a></li>
              <li><a href="#" className="text-white">Login/Logout</a></li>
            </ul>
          </div>
        </div>
        <hr className="bg-light" />
        <div className="d-flex justify-content-between align-items-center">
          <p className="mb-0">&copy; MR bean LLC 2024 All Rights Reserved.</p>
          <div>
            <img src={ft} alt="Visa" width="240" className="me-2" />
            {/* <img src="mastercard.png" alt="Mastercard" width="40" className="me-2" />
            <img src="paypal.png" alt="PayPal" width="40" className="me-2" /> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;