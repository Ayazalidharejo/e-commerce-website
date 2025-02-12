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
          element: <ProtectedRounte> <Mainepage /> </ProtectedRounte>  ,
        },
       
       
      
       
        {
          path: "/About",
      
          element: <ProtectedRounte> <AboutUs /> </ProtectedRounte>  ,
        },
        {
          path: "/Contact",
         
          element: <ProtectedRounte> <ContactForm /> </ProtectedRounte>  ,
        },
        {
          path: "/ReturnPolicy",
        
          element: <ProtectedRounte> <ReturnPolicy /> </ProtectedRounte>  ,
        },
       
        {
          path: "/Kichenmaine",
        
          element: <ProtectedRounte> <Kichenmaine /> </ProtectedRounte>  ,
        },
        {
          path: "/Tyand_gamesmaine",
        
          element: <ProtectedRounte> <Tyand_gamesmaine /> </ProtectedRounte>  ,
        },
       
        {
          path: "/Babyproductmaine",
         
          element: <ProtectedRounte> <Babyproductmaine /> </ProtectedRounte>  ,
        },
        {
          path: "/Beautyproductmaine",
         
          element: <ProtectedRounte> <Beautyproductmaine /> </ProtectedRounte>  ,
        },
        {
          path: "/Suplincemaine",
         
          element: <ProtectedRounte> <Suplincemaine /> </ProtectedRounte>  ,
        },
        {
          path: "/OfficeProductmaine",
       
          element: <ProtectedRounte> <OfficeProductmaine /> </ProtectedRounte>  ,
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
