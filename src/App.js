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

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: < NavigationBar />,
      errorElement: <> <h1> error </h1> </>,
      children: [
        {
          path: "",
          element: <Mainepage />,
        },
       
       
      
       
        {
          path: "/About",
          element: <AboutUs />,
        },
        {
          path: "/Contact",
          element: <ContactForm />,
        },
        {
          path: "/ReturnPolicy",
          element: <ReturnPolicy />,
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
