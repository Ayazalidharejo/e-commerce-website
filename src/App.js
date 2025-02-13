import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./Store/Store";
import NavigationBar from "./comoponents/Layout/Layout";

import { Provider } from "react-redux";
import Mainepage from "./Homepage/Mainepage";
import AboutUs from "./About_us/About_us";
import ContactForm from "./comoponents/Contactpage/Contect_us";
import ReturnPolicy from "./Returnpolicy/Returnpage";

import Kichenmaine from "./comoponents/Homekichen/Kichenmaine";
import Tyand_gamesmaine from "./comoponents/TOyand_games/Tyand_gamesmaine";
import Babyproductmaine from "./comoponents/Babyproduct/Babyproductmaine";
import Beautyproductmaine from "./comoponents/Beautyproduct/Beautyproductmaine";
import Suplincemaine from "./comoponents/Suplince/Suplincemaine";
import OfficeProductmaine from "./comoponents/Officeproduct/OfficeProductmaine";
import ProtectedRounte from "./comoponents/Protectedrounte/ProtectedRounte"
import Signup from "./comoponents/Outh/Signup";
import Login from "./comoponents/Outh/Login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:   < NavigationBar /> ,
      errorElement: <> <h1> error </h1> </>,
      children: [
        {
          path: "",
          element:  <Mainepage /> ,
        },
       
       
      
       
        {
          path: "/About",
      
          element:  <AboutUs />   ,
        },
        {
          path: "/Contact",
         
          element:  <ContactForm />   ,
        },
        {
          path: "/ReturnPolicy",
        
          element:  <ReturnPolicy />   ,
        },
       
        {
          path: "/Kichenmaine",
        
          element:  <Kichenmaine />   ,
        },
        {
          path: "/Tyand_gamesmaine",
        
          element:  <Tyand_gamesmaine />   ,
        },
       
        {
          path: "/Babyproductmaine",
         
          element:  <Babyproductmaine />   ,
        },
        {
          path: "/Beautyproductmaine",
         
          element:  <Beautyproductmaine /> ,
        },
        {
          path: "/Suplincemaine",
         
          element: <Suplincemaine /> ,
        },
        {
          path: "/OfficeProductmaine",
       
          element:  <OfficeProductmaine />  ,
        },
        {
          path: "/Signup",
          element: <Signup />,
        },
        {
          path: "/Login",
          element: <Login />,
        },
       
      ],
    },
  ]);

  return (
    <div className="App">
    
      <Provider store={store}>
        <RouterProvider router={router} />
        
      </Provider>
    
    </div>
  );
}

export default App;
