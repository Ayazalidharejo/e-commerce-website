import { configureStore } from "@reduxjs/toolkit";

import locationReducer from "../Slice/Addtocart";

export const store = configureStore({
  reducer: {
  
    Location: locationReducer,
  },
});
