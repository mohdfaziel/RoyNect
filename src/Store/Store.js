import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './Cart/CartSlice'
import userReducer from './User/UserSlice'
import honeyReducer from './Honey/HoneySlice'
export const Store = configureStore({
    reducer : {
        cart: cartReducer,
        user : userReducer,
        honey : honeyReducer
    }
})