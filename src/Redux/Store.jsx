// store.js
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import cartReducer from './cartSlice';
// import filtersReducer from './filterSlice'; 

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    // filters: filtersReducer,
  },
});

export default store;
