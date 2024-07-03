import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/CartSlice"; 
import CategorySlice from "./slices/CategorySlice";
import SearchSlice from "./slices/SearchSlice";
const Store = configureStore({
    reducer: {
        cart: cartReducer,
        category: CategorySlice,
        search: SearchSlice,
    },
});

export default Store;
