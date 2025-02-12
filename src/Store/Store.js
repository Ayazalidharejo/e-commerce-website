import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Slice/Addtocart";

export const store = configureStore({
  reducer: {
    products: productReducer,
   
  },
});
