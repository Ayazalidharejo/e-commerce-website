


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

  // Handle mismatched data
  if (loginData.email !== signupData.email) {
    return <div>Something went wrong: Emails do not match.</div>;
  }

  if (loginData.password !== signupData.password) {
    return <h1 className='text-center mt-3'>Something went wrong: Passwords do not match.</h1>;
  }

  // Default fallback
  return <h1 className='text-center mt-3'>Something went wrong, please check your login and signup data.</h1>;
};

export default ProtectedRoute;
