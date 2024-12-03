import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './Cart/CartSlice'
export const Store = configureStore({
    reducer : {
        cart: cartReducer
    }
})