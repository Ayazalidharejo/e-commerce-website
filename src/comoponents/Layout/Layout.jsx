import React from "react";
// import { Icon } from '@iconify/react';
 // Search icon
import userIcon from '@iconify-icons/fa-solid/user';  // User icon
import heartIcon from '@iconify-icons/fa-solid/heart';  // Heart icon
import exchangeAltIcon from '@iconify-icons/fa-solid/exchange-alt';  // Exchange Alt icon
import shoppingCartIcon from '@iconify-icons/fa-solid/shopping-cart';  // Shopping Cart icon
import { Link, Outlet } from "react-router-dom";
import { Icon } from "@iconify/react";
import image from "../../images/logo.png"
import { Drawer } from "@mui/material";
import MyDrawer from "../../Sidebar/Drawer";
import { useSelector } from "react-redux";
import FilterComponent from "../../FilterComponent";
import "./style.css"

const NavigationBar = () => {
 
 
  const items = useSelector((state) => state.products.items);
  const totalPrice = items.reduce((total, item) => total + (item.price * item.quantity), 0);

  
  const [open, setOpen] = React.useState(false);

    
   const toggleDrawer = (state) => {
     setOpen(state);
   };
  return (
    <>
   
   <div className="bg-warning text-white text-center py-2">
   <div className="container ">
    <div className="d-flex justify-content-between">
     <div >
        <small>GET FREE DELIVERY OVER THE ORDER OF $99</small>
      </div>
<div>
    <ul className="d-flex list-unstyled ">
      <Link className="text-decoration-none text-white" to="/Contact">   <li>Contact US</li> </Link>
     <Link className="text-decoration-none text-white" to="/About">    <li className="mx-3">About US</li> </Link>
       
       <Link className="text-decoration-none text-white" to="/ReturnPolicy"> <li>Retrurn Policy</li> </Link>
    </ul>
</div>

     </div>
    </div>

   </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
       <div>

        
       <Link className="text-decoration-none" to="">
           <img style={{width:"70px",height:"50px"}} src={image} alt="Dhir Crick" width="120" />
           <span className="fw-bold" > NYIYI346.com</span>
           </Link>
         
       </div>
         
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <form className="d-flex flex-grow-1 mx-3">
              <input className="form-control me-2" type="search" placeholder="Search for products" aria-label="Search" />
              <div className="dropdown">
                <button className="btn btn-light dropdown-toggle" type="button" id="dropdown-category" data-bs-toggle="dropdown" aria-expanded="false">
                  Select Category
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdown-category">
                  <li><a className="dropdown-item" href="#">Home & Kitchen</a></li>
                  <li><a className="dropdown-item" href="#">Toys & Games</a></li>
                  <li><a className="dropdown-item" href="#">Baby Products</a></li>
                </ul>
              </div>
              <button className="btn btn-warning ms-2" type="button">
              <Icon icon="fluent:search-24-regular" />
              </button>
            </form>

            <div className="d-flex align-items-center justify-content-center mt-2  ">


           <ul className="navbar-na ms-auto d-flex align-items-center bar list-unstyled">
           
           <li className=" ">
           <Link className="text-decoration-none  " to="/Signup">  <Icon className="text-secondary"  icon={userIcon} width={20} /> </Link>
           </li>
           <li className="nav-item mx-2">
             <a className="nav-link" href="#"><Icon icon={heartIcon} width={20} /></a>
           </li>
           <li className="nav-item mx-2">
             <a className="nav-link" href="#"><Icon icon={exchangeAltIcon} width={20} /></a>
           </li>
           <li className="nav-item">
             <a className="nav-link d-flex align-items-center" href="#">
               <Icon  onClick={ toggleDrawer} icon={shoppingCartIcon} width={20} />
               <span className="badge bg-warning ms-1">{items.length}</span>

               <span className="ms-2">${totalPrice}</span>
             </a>
           </li>
         </ul>
           </div>
            
          </div>
        </div>
      </nav>
      <div className="bg-light py-2">
        <div className="container">
          <ul className="nav justify-content-center">
          <Link to="/Kichenmaine" className="text-decoration-none">   <li className="nav-item">
            HOME & KITCHEN
            </li> </Link>

          <Link to="/Tyand_gamesmaine" className="text-decoration-none mx-3">   <li className="nav-item">
             TOYS & GAMES
            </li></Link>

           <Link to="/Babyproductmaine" className="text-decoration-none"> <li className="nav-item">
             BABY PRODUCTS
            </li> </Link>
           <Link to="/Beautyproductmaine" className="text-decoration-none mx-3">  <li className="nav-item">
              BEAUTY PRODUCTS
            </li></Link>

          <Link to="/Suplincemaine" className="text-decoration-none">   <li className="nav-item">
            PET SUPPLIES
            </li> </Link>
           <Link to="/OfficeProductmaine" className="text-decoration-none mx-3"> <li className="nav-item">
            OFFICE PRODUCTS
            </li> </Link>
          </ul>
        </div>
      </div>
    
      <MyDrawer open={open} toggleDrawer={toggleDrawer}/>
      
      <Outlet/>
      
    </>
  );
};

export default NavigationBar;
