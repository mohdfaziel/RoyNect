import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './Cart/CartSlice'
import userReducer from './User/UserSlice'
export const Store = configureStore({
    reducer : {
        cart: cartReducer,
        user : userReducer
    }
})