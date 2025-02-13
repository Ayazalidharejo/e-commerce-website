// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import Signup from '../Outh/Signup';

// const ProtectedRoute = ({ children }) => {
//   // Retrieve login and signup data from localStorage
//   const loginData = JSON.parse(localStorage.getItem("logindata"));
//   const signupData = JSON.parse(localStorage.getItem("signupdata"));

//   const navigate = useNavigate(); // Get navigate function

//   const handleSignupRedirect = () => {
//     navigate("/Signup"); // Navigate to /Signup route
//   };

//   // Check if login and signup data exist
//   if (loginData && signupData) {
//     // Compare login email and password with signup email and password
//     if (loginData.email === signupData.email && loginData.password === signupData.password) {
//       // If they match, show children components
//       return <div>{children}</div>;
//     }
//   }
//     if (loginData.email !== signupData.email && loginData.password === signupData.password) {
//       // If they match, show children components
//       return <div>Something wrong</div>;
//     }}
//     if (loginData.email === signupData.email && loginData.password !== signupData.password) {
//       // If they match, show children components
//       return <div>Something have wrong</div>;
//     }
//   }

//   // If login and signup data do not match or are missing, show a button to navigate to Signup
//   return (
//     <div>
//       {/* <button onClick={handleSignupRedirect}>Go to Signup</button> */}
//       <Signup/>
//     </div>
//   );
// };

// export default ProtectedRoute;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import Signup from '../Outh/Signup';

const ProtectedRoute = ({ children }) => {
  // Retrieve login and signup data from localStorage
  const loginData = JSON.parse(localStorage.getItem("logindata"));
  const signupData = JSON.parse(localStorage.getItem("signupdata"));

  const navigate = useNavigate(); // Get navigate function

  // Check if login and signup data exist and if they match
  if (!loginData || !signupData) {
    // If either login or signup data is missing, redirect to signup
    return <Signup />;
  }

  // Compare login email and password with signup email and password
  if (loginData.email === signupData.email && loginData.password === signupData.password) {
    // If they match, show children components
    return <div>{children}</div>;
  }



  // Default fallback
  return <h1 className='text-center mt-3'>Something went wrong, please check your login and signup data.</h1>;
};

export default ProtectedRoute;
