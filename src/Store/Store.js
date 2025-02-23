import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './Cart/CartSlice'
import userReducer from './User/UserSlice'
import honeyReducer from './Honey/HoneySlice'
import orderReducer from './OrderDetails/OrderSlice'
export const Store = configureStore({
    reducer : {
        cart: cartReducer,
        user : userReducer,
        honey : honeyReducer,
        order : orderReducer
    }
})