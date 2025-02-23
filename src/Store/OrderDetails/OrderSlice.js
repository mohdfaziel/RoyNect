import { createSlice } from "@reduxjs/toolkit";
const orderSlice = createSlice({
    name: "order",
    initialState: {
        
    },
    reducers:{
        reStock: (state, action) => {
            state.qtyAvailable = action.payload;
        },
    }
})
export const { reStock } = orderSlice.actions;
export default orderSlice.reducer;