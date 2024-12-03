import { createSlice } from "@reduxjs/toolkit";
const calculateTotals = (items) => {
    const qty = items.reduce((sum, item) => sum + item.qty, 0);
    const total = items.reduce((sum, item) => sum + item.qty * item.price, 0);
    return { qty, total };
  };
  
  export const CartSlice = createSlice({
    name: "cart",
    initialState: () => {
      const items = localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : [{ id: 1, qty: 1, price: 750, weight: 1 }];
      const { qty, total } = calculateTotals(items);
      return {
        items,
        qty,
        total,
        state: false,
      };
    },
  reducers: {
    toggleState : (state) => {
        state.state = !state.state;
        console.log("cart status is: "+state.state);
    },
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.qty += action.payload.qty;
        if(existingItem.qty > 10){
          existingItem.qty = 10;
        }
      } else {
        const newItem = {
          id: action.payload.id,
          qty: action.payload.qty,
          price: action.payload.price,
          weight: action.payload.weight,
        };
        state.items.push(newItem);
      }
      const { qty, total } = calculateTotals(state.items);
      state.qty = qty;
      state.total = total;
      localStorage.setItem("cart", JSON.stringify(state.items));
      console.log(state.total);
      console.log(state.qty);
    },
    removeItem: (state, action) => {
      const itemToRemove = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (itemToRemove) {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        const { qty, total } = calculateTotals(state.items);
        state.qty = qty;
        state.total = total;
      }
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    incQty: (state, action) => {
        const existingItem = state.items.find(
          (item) => item.id === action.payload.id
        );
        if (existingItem && existingItem.qty < 10) {
          existingItem.qty += 1;
          const { qty, total } = calculateTotals(state.items);
          state.qty = qty;
          state.total = total;
          localStorage.setItem("cart", JSON.stringify(state.items));
        }
      },
    decQty: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        if (existingItem.qty > 1) {
          existingItem.qty -= 1;
        } else {
          state.items = state.items.filter((item) => item.id !== action.payload.id);
        }
        const { qty, total } = calculateTotals(state.items);
        state.qty = qty;
        state.total = total;
        localStorage.setItem("cart", JSON.stringify(state.items));
      }
    },
  },
});

export const { toggleState, addItem, removeItem, incQty, decQty } = CartSlice.actions;
export default CartSlice.reducer;
