// import React from "react";
// // import { Icon } from '@iconify/react';
//  // Search icon
// import userIcon from '@iconify-icons/fa-solid/user';  // User icon
// import heartIcon from '@iconify-icons/fa-solid/heart';  // Heart icon
// import exchangeAltIcon from '@iconify-icons/fa-solid/exchange-alt';  // Exchange Alt icon
// import shoppingCartIcon from '@iconify-icons/fa-solid/shopping-cart';  // Shopping Cart icon
// import { Link, Outlet } from "react-router-dom";
// import { Icon } from "@iconify/react";
// import image from "../../images/logo.png"
// import { Drawer } from "@mui/material";
// import MyDrawer from "../../Sidebar/Drawer";
// import { useSelector } from "react-redux";
// import FilterComponent from "../../FilterComponent";
// import "./style.css"

// const NavigationBar = () => {
 
 
//   const items = useSelector((state) => state.products.items);
//   const totalPrice = items.reduce((total, item) => total + (item.price * item.quantity), 0);

  
//   const [open, setOpen] = React.useState(false);

    
//    const toggleDrawer = (state) => {
//      setOpen(state);
//    };
//   return (
//     <>
   
//    <div className="bg-warning text-white text-center py-2">
//    <div className="container ">
//     <div className="d-flex justify-content-between">
//      <div >
//         <small>GET FREE DELIVERY OVER THE ORDER OF $99</small>
//       </div>
// <div>
//     <ul className="d-flex list-unstyled ">
//       <Link className="text-decoration-none text-white" to="/Contact">   <li>Contact US</li> </Link>
//      <Link className="text-decoration-none text-white" to="/About">    <li className="mx-3">About US</li> </Link>
       
//        <Link className="text-decoration-none text-white" to="/ReturnPolicy"> <li>Retrurn Policy</li> </Link>
//     </ul>
// </div>

//      </div>
//     </div>

//    </div>
//       <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
//         <div className="container">
//        <div>

        
//        <Link className="text-decoration-none" to="">
//            <img style={{width:"70px",height:"50px"}} src={image} alt="Dhir Crick" width="120" />
//            <span className="fw-bold" > NYIYI346.com</span>
//            </Link>
         
//        </div>
         
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <form className="d-flex flex-grow-1 mx-3">
//               <input className="form-control me-2" type="search" placeholder="Search for products" aria-label="Search" />
//               <div className="dropdown">
//                 <button className="btn btn-light dropdown-toggle" type="button" id="dropdown-category" data-bs-toggle="dropdown" aria-expanded="false">
//                   Select Category
//                 </button>
//                 <ul className="dropdown-menu" aria-labelledby="dropdown-category">
//                   <li><a className="dropdown-item" href="#">Home & Kitchen</a></li>
//                   <li><a className="dropdown-item" href="#">Toys & Games</a></li>
//                   <li><a className="dropdown-item" href="#">Baby Products</a></li>
//                 </ul>
//               </div>
//               <button className="btn btn-warning ms-2" type="button">
//               <Icon icon="fluent:search-24-regular" />
//               </button>
//             </form>

//             <div className="d-flex align-items-center justify-content-center mt-2  ">


//            <ul className="navbar-na ms-auto d-flex align-items-center bar list-unstyled">
           
//            <li className=" ">
//            <Link className="text-decoration-none  " to="/Signup">  <Icon className="text-secondary"  icon={userIcon} width={20} /> </Link>
//            </li>
//            <li className="nav-item mx-2">
//              <a className="nav-link" href="#"><Icon icon={heartIcon} width={20} /></a>
//            </li>
//            <li className="nav-item mx-2">
//              <a className="nav-link" href="#"><Icon icon={exchangeAltIcon} width={20} /></a>
//            </li>
//            <li className="nav-item">
//              <a className="nav-link d-flex align-items-center" href="#">
//                <Icon  onClick={ toggleDrawer} icon={shoppingCartIcon} width={20} />
//                <span className="badge bg-warning ms-1">{items.length}</span>

//                <span className="ms-2">${totalPrice}</span>
//              </a>
//            </li>
//          </ul>
//            </div>
            
//           </div>
//         </div>
//       </nav>
//       <div className="bg-light py-2">
//         <div className="container">
//           <ul className="nav justify-content-center">
//           <Link to="/Kichenmaine" className="text-decoration-none">   <li className="nav-item">
//             HOME & KITCHEN
//             </li> </Link>

//           <Link to="/Tyand_gamesmaine" className="text-decoration-none mx-3">   <li className="nav-item">
//              TOYS & GAMES
//             </li></Link>

//            <Link to="/Babyproductmaine" className="text-decoration-none"> <li className="nav-item">
//              BABY PRODUCTS
//             </li> </Link>
//            <Link to="/Beautyproductmaine" className="text-decoration-none mx-3">  <li className="nav-item">
//               BEAUTY PRODUCTS
//             </li></Link>

//           <Link to="/Suplincemaine" className="text-decoration-none">   <li className="nav-item">
//             PET SUPPLIES
//             </li> </Link>
//            <Link to="/OfficeProductmaine" className="text-decoration-none mx-3"> <li className="nav-item">
//             OFFICE PRODUCTS
//             </li> </Link>
//           </ul>
//         </div>
//       </div>
    
//       <MyDrawer open={open} toggleDrawer={toggleDrawer}/>
      
//       <Outlet/>
      
//     </>
//   );
// };

// export default NavigationBar;



// import React from "react";
// import { Icon } from "@iconify/react";
// import userIcon from '@iconify-icons/fa-solid/user';
// import heartIcon from '@iconify-icons/fa-solid/heart';
// import exchangeAltIcon from '@iconify-icons/fa-solid/exchange-alt';
// import shoppingCartIcon from '@iconify-icons/fa-solid/shopping-cart';
// import { Link, Outlet } from "react-router-dom";
// import image from "../../images/logo.png";
// import { Drawer } from "@mui/material";
// import { useSelector } from "react-redux";
// import "./style.css";

// const NavigationBar = () => {
//   const items = useSelector((state) => state.products.items);
//   const totalPrice = items.reduce((total, item) => total + (item.price * item.quantity), 0);

//   const [open, setOpen] = React.useState(false);

//   const toggleDrawer = (state) => {
//     setOpen(state);
//   };

//   return (
//     <>
//       {/* Mobile Sidebar Drawer */}
//       <Drawer
//         anchor="left"
//         open={open}
//         onClose={() => toggleDrawer(false)}
//         className="mobile-sidebar"
//       >
//         <div className="mobile-sidebar-content">
//           {/* Logo and Home Link */}
//           <div className="d-flex align-items-center">
//             <Link className="text-decoration-none" to="">
//               <img style={{ width: "70px", height: "50px" }} src={image} alt="Dhir Crick" />
//               <span className="fw-bold">NYIYI346.com</span>
//             </Link>
//           </div>

//           {/* Search and Category Dropdown */}
//           <div className="search-category">
//             <input className="form-control my-3" type="search" placeholder="Search for products" aria-label="Search" />
//             <div className="dropdown">
//               <button className="btn btn-light dropdown-toggle" type="button" id="dropdown-category" data-bs-toggle="dropdown" aria-expanded="false">
//                 Select Category
//               </button>
//               <ul className="dropdown-menu" aria-labelledby="dropdown-category">
//                 <li><a className="dropdown-item" href="#">Home & Kitchen</a></li>
//                 <li><a className="dropdown-item" href="#">Toys & Games</a></li>
//                 <li><a className="dropdown-item" href="#">Baby Products</a></li>
//               </ul>
//             </div>
//           </div>

//           {/* Navbar Links */}
//           <div className="navbar-links">
//             <ul className="list-unstyled">
//               <li><Link className="text-decoration-none" to="/Signup"><Icon icon={userIcon} width={20} /> Sign Up</Link></li>
//               <li><a className="text-decoration-none" href="#"><Icon icon={heartIcon} width={20} /> Wishlist</a></li>
//               <li><a className="text-decoration-none" href="#"><Icon icon={exchangeAltIcon} width={20} /> Orders</a></li>
//               <li><a className="text-decoration-none" href="#"><Icon icon={shoppingCartIcon} width={20} /> Cart ({items.length}) - ${totalPrice}</a></li>
//             </ul>
//           </div>
          
//           {/* Categories Links */}
//           <div className="categories">
//             <ul className="list-unstyled">
//               <li><Link to="/Kichenmaine" className="text-decoration-none">Home & Kitchen</Link></li>
//               <li><Link to="/Tyand_gamesmaine" className="text-decoration-none">Toys & Games</Link></li>
//               <li><Link to="/Babyproductmaine" className="text-decoration-none">Baby Products</Link></li>
//               <li><Link to="/Beautyproductmaine" className="text-decoration-none">Beauty Products</Link></li>
//               <li><Link to="/Suplincemaine" className="text-decoration-none">Pet Supplies</Link></li>
//               <li><Link to="/OfficeProductmaine" className="text-decoration-none">Office Products</Link></li>
//             </ul>
//           </div>
//         </div>
//       </Drawer>

//       {/* Top Banner (Desktop and Mobile) */}
      
//       <div className="bg-warning text-white text-center py-2">
//         <div className="container">
//           <div className="d-flex justify-content-between">
            
//             <div>
//               <small>GET FREE DELIVERY OVER THE ORDER OF $99</small>
//             </div>
//             <div>
//               <ul className="d-flex list-unstyled">
//                 <Link className="text-decoration-none text-white" to="/Contact"><li>Contact US</li></Link>
//                 <Link className="text-decoration-none text-white" to="/About"><li className="mx-3">About US</li></Link>
//                 <Link className="text-decoration-none text-white" to="/ReturnPolicy"><li>Return Policy</li></Link>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Desktop Navbar */}
//       <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
//         <div className="container">
//           <div>
//             <Link className="text-decoration-none" to="">
//               <img style={{ width: "70px", height: "50px" }} src={image} alt="Logo" />
//               <span className="fw-bold">NYIYI346.com</span>
//             </Link>
//           </div>

//           <button className="navbar-toggler" type="button" onClick={() => toggleDrawer(true)}>
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           <div className="collapse navbar-collapse">
//             <ul className="navbar-nav ms-auto d-flex align-items-center">
//               <li className="nav-item mx-2">
//                 <Link className="text-decoration-none" to="/Signup"><Icon icon={userIcon} width={20} /></Link>
//               </li>
//               <li className="nav-item mx-2"><a href="#"><Icon icon={heartIcon} width={20} /></a></li>
//               <li className="nav-item mx-2"><a href="#"><Icon icon={exchangeAltIcon} width={20} /></a></li>
//               <li className="nav-item">
//                 <a href="#" className="d-flex align-items-center">
//                   <Icon icon={shoppingCartIcon} width={20} />
//                   <span className="badge bg-warning ms-1">{items.length}</span>
//                   <span className="ms-2">${totalPrice}</span>
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>

//       {/* Desktop Category Links */}
//       <div className="bg-light py-2">
//         <div className="container">
//           <ul className="nav justify-content-center">
//             <Link to="/Kichenmaine" className="text-decoration-none"><li className="nav-item">HOME & KITCHEN</li></Link>
//             <Link to="/Tyand_gamesmaine" className="text-decoration-none mx-3"><li className="nav-item">TOYS & GAMES</li></Link>
//             <Link to="/Babyproductmaine" className="text-decoration-none"><li className="nav-item">BABY PRODUCTS</li></Link>
//             <Link to="/Beautyproductmaine" className="text-decoration-none mx-3"><li className="nav-item">BEAUTY PRODUCTS</li></Link>
//             <Link to="/Suplincemaine" className="text-decoration-none"><li className="nav-item">PET SUPPLIES</li></Link>
//             <Link to="/OfficeProductmaine" className="text-decoration-none mx-3"><li className="nav-item">OFFICE PRODUCTS</li></Link>
//           </ul>
//         </div>
//       </div>

//       {/* Outlet for page content */}
//       <Outlet />
//     </>
//   );
// };

// export default NavigationBar;



import React from "react";
import { Icon } from "@iconify/react";
import userIcon from '@iconify-icons/fa-solid/user';
import heartIcon from '@iconify-icons/fa-solid/heart';
import exchangeAltIcon from '@iconify-icons/fa-solid/exchange-alt';
import shoppingCartIcon from '@iconify-icons/fa-solid/shopping-cart';
import { Link, Outlet } from "react-router-dom";
import image from "../../images/logo.png";
import { Drawer } from "@mui/material";
import { useSelector } from "react-redux";
import "./style.css";
import MyDrawer from "../../Sidebar/Drawer";

const NavigationBar = () => {
  const items = useSelector((state) => state.products.items);
  const totalPrice = items.reduce((total, item) => total + (item.price * item.quantity), 0);

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (state) => {
    setOpen(state);
  };



  const [show, setShow] = React.useState(false);

    
      const toggleDrawere = (state) => {
        setShow(state);
      };
  return (
    <>
      {/* Mobile Sidebar Drawer */}
      <Drawer
        anchor="left"
        open={open}
        onClose={() => toggleDrawer(false)}
        className="mobile-sidebar"
      >
        <div className="mobile-sidebar-content">
          {/* Logo and Home Link */}
          <div className="d-flex align-items-center mb-3">
            <Link className="text-decoration-none" to="">
              <img style={{ width: "70px", height: "50px" }} src={image} alt="Dhir Crick" />
              <span className="fw-bold">NYIYI346.com</span>
            </Link>
          </div>

          {/* Search and Category Dropdown (for mobile xs screens inside sidebar) */}
          <div className="search-category my-3">
            <input className="form-control" type="search" placeholder="Search for products" aria-label="Search" />
            <div className="dropdown">
              <button className="btn btn-light dropdown-toggle w-100" type="button" id="dropdown-category" data-bs-toggle="dropdown" aria-expanded="false">
                Select Category
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdown-category">
                <li><a className="dropdown-item" href="#">Home & Kitchen</a></li>
                <li><a className="dropdown-item" href="#">Toys & Games</a></li>
                <li><a className="dropdown-item" href="#">Baby Products</a></li>
              </ul>
            </div>
          </div>

          {/* Categories Links */}
          <div className="categories text-center">
            <ul className="list-unstyled">
              <li><Link to="/Kichenmaine" className="text-decoration-none fw-bold">Home & Kitchen</Link></li>
              <li className="my-2"><Link to="/Tyand_gamesmaine " className="text-decoration-none fw-bold ">Toys & Games</Link></li>
              <li><Link to="/Babyproductmaine" className="text-decoration-none fw-bold">Baby Products</Link></li>
              <li className="my-2"><Link to="/Beautyproductmaine" className="text-decoration-none fw-bold">Beauty Products</Link></li>
              <li><Link to="/Suplincemaine" className="text-decoration-none fw-bold">Pet Supplies</Link></li>
              <li className="my-2"><Link to="/OfficeProductmaine" className="text-decoration-none fw-bold">Office Products</Link></li>
            </ul>
          </div>
        </div>
      </Drawer>

      {/* Top Banner (Desktop and Mobile) */}
      <div className="bg-warning text-white text-center py-2">
        <div className="container">
          <div className="d-flex justify-content-between">
          <div className="d-none d-md-block">
  <small>GET FREE DELIVERY OVER THE ORDER OF $99</small>
</div>

            <div  className="menue">
              <ul className="d-flex list-unstyled">
                <Link className="text-decoration-none text-white" to="/Contact"><li>Contact US</li></Link>
                <Link className="text-decoration-none text-white" to="/About"><li className="mx-3">About US</li></Link>
                <Link className="text-decoration-none text-white" to="/ReturnPolicy"><li>Return Policy</li></Link>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <div>
            <Link className="text-decoration-none" to="">
              <img style={{ width: "70px", height: "50px" }} src={image} alt="Logo" />
              <span className="fw-bold">NYIYI346.com</span>
            </Link>
          </div>

          <button className="navbar-toggler" type="button" onClick={() => toggleDrawer(true)}>
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse">
            {/* Desktop Search and Category Dropdown (Hidden on Mobile) */}
            <div className="d-none d-md-flex search-category align-items-center ms-aut w-100 ">
              <input className="form-control me-2 w-100 ms-1" type="search" placeholder="Search for products" aria-label="Search" />
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
            </div>

            {/* Navbar Links */}
            <ul className="navbar-nav ms-auto d-flex align-items-center">
              <li className="nav-item mx-2">
                <Link className="text-decoration-none" to="/Signup"><Icon icon={userIcon} width={20} /></Link>
              </li>
              <li className="nav-item mx-2"><a href="#"><Icon icon={heartIcon} width={20} /></a></li>
              <li className="nav-item mx-2"><a href="#"><Icon icon={exchangeAltIcon} width={20} /></a></li>
              <li className="nav-item">
                <a href="#" className="d-flex align-items-center">
                  <Icon onClick={toggleDrawere} icon={shoppingCartIcon} width={20} />
                  <span className="badge bg-warning ms-1">{items.length}</span>
                  <span className="ms-2">${totalPrice}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Desktop Category Links */}
      <div className="bg-light py-2">
        <div className="container">
          <ul className="nav justify-content-center d-none d-md-flex">
            <Link to="/Kichenmaine" className="text-decoration-none"><li className="nav-item">HOME & KITCHEN</li></Link>
            <Link to="/Tyand_gamesmaine" className="text-decoration-none mx-3"><li className="nav-item">TOYS & GAMES</li></Link>
            <Link to="/Babyproductmaine" className="text-decoration-none"><li className="nav-item">BABY PRODUCTS</li></Link>
            <Link to="/Beautyproductmaine" className="text-decoration-none mx-3"><li className="nav-item">BEAUTY PRODUCTS</li></Link>
            <Link to="/Suplincemaine" className="text-decoration-none"><li className="nav-item">PET SUPPLIES</li></Link>
            <Link to="/OfficeProductmaine" className="text-decoration-none mx-3"><li className="nav-item">OFFICE PRODUCTS</li></Link>
          </ul>
        </div>
      </div>
<MyDrawer show={show} toggleDrawere={toggleDrawere}  />
      {/* Outlet for page content */}
      <Outlet />
    </>
  );
};

export default NavigationBar;
