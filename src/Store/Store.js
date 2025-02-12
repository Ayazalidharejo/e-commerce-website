import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Slice/Addtocart";
import categoryReducer from '../Slice/Catogary';

export const store = configureStore({
  reducer: {
    products: productReducer,
    category: categoryReducer,
   
  },
});











