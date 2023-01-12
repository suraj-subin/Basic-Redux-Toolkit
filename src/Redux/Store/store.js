import { configureStore } from "@reduxjs/toolkit";
import productReducer from  "../Reducer/ProductSlice";

export const store = configureStore({
  reducer: {
    abc: productReducer,
  },  
});
