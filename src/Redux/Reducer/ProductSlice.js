import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};
  
export const productSlice = createSlice({
  name: "productItem",
  initialState,
  reducers: {
    setProductData: (state, action) => {
      state.products = action.payload.producted;
    },
  },
});

export const { setProductData } = productSlice.actions;
export default productSlice.reducer;
