import { createSlice } from "@reduxjs/toolkit";
const orderSlice = createSlice({
    name: "order",
    initialState: {
        orderDetails: []
    },
    reducers:{
        setOrder: (state, action) => {
            state.orderDetails = action.payload;
        },
        clearOrder: (state) => {
            state.orderDetails = [];
        },
    }
})
export const { setOrder,clearOrder } = orderSlice.actions;
export default orderSlice.reducer;