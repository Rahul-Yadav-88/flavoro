import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/CartSlice"; 

const Store = configureStore({
    reducer: {
        cart: cartReducer
    },
});

export default Store;
