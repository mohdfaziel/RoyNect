import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
const calculateTotals = (items) => {
  const qty = items.reduce((sum, item) => sum + item.qty, 0);
  const total = items.reduce((sum, item) => sum + item.qty * item.price, 0);
  const totalWeight = items.reduce((sum, item) => sum + item.weight * item.qty, 0);
  return { qty, total, totalWeight };
};

export const CartSlice = createSlice({
  name: "cart",
  initialState: () => {
    const items = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    const { qty, total , totalWeight} = calculateTotals(items);
    return {
      items,
      qty,
      total,
      totalWeight,
      state: false,
    };
  },
  reducers: {
    toggleState: (state) => {
      state.state = !state.state;
    },
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.qty += action.payload.qty;
        if (existingItem.qty > 10) {
          toast.error("You can't add more than 10 items of a product");
          existingItem.qty = 10;
        } else {
          toast.success("Item Added to Cart");
        }
      } else {
        const newItem = {
          id: action.payload.id,
          qty: action.payload.qty,
          price: action.payload.price,
          weight: action.payload.weight,
        };
        state.items.push(newItem);
        toast.success("Item Added to Cart");
      }
      const { qty, total, totalWeight } = calculateTotals(state.items);
      state.qty = qty;
      state.total = total;
      state.totalWeight = totalWeight;
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeItem: (state, action) => {
      const itemToRemove = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (itemToRemove) {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        const { qty, total, totalWeight } = calculateTotals(state.items);
        state.qty = qty;
        state.total = total;
        state.totalWeight = totalWeight;
      }
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    incQty: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem && existingItem.qty < 10) {
        existingItem.qty += 1;
        const { qty, total, totalWeight } = calculateTotals(state.items);
        state.qty = qty;
        state.total = total;
        state.totalWeight = totalWeight;
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
          state.items = state.items.filter(
            (item) => item.id !== action.payload.id
          );
        }
        const { qty, total, totalWeight } = calculateTotals(state.items);
        state.qty = qty;
        state.total = total;
        state.totalWeight = totalWeight;
        localStorage.setItem("cart", JSON.stringify(state.items));
      }
    },
  },
});

export const { toggleState, addItem, removeItem, incQty, decQty } =
  CartSlice.actions;
export default CartSlice.reducer;
// import { createSlice } from "@reduxjs/toolkit";
// import toast from "react-hot-toast";

// const calculateTotals = (items) => {
//   const qty = items.reduce((sum, item) => sum + item.qty, 0);
//   const total = items.reduce((sum, item) => sum + item.qty * item.price, 0);
//   const totalWeight = items.reduce((sum, item) => sum + item.weight * item.qty, 0);
  
//   // Calculate size-wise quantities
//   const sizeQuantities = items.reduce((acc, item) => {
//     acc[item.weight] = (acc[item.weight] || 0) + item.qty;
//     return acc;
//   }, {});

//   return { qty, total, totalWeight, sizeQuantities };
// };

// export const CartSlice = createSlice({
//   name: "cart",
//   initialState: () => {
//     const items = localStorage.getItem("cart")
//       ? JSON.parse(localStorage.getItem("cart"))
//       : [];
//     const { qty, total, totalWeight, sizeQuantities } = calculateTotals(items);
//     return {
//       items,
//       qty,
//       total,
//       totalWeight,
//       sizeQuantities,
//       state: false,
//     };
//   },
//   reducers: {
//     toggleState: (state) => {
//       state.state = !state.state;
//     },
//     addItem: (state, action) => {
//       const existingItem = state.items.find(
//         (item) => item.id === action.payload.id && item.weight === action.payload.weight
//       );

//       if (existingItem) {
//         existingItem.qty += action.payload.qty;
//         if (existingItem.qty > 10) {
//           toast.error("You can't add more than 10 items of a product size");
//           existingItem.qty = 10;
//         } else {
//           toast.success("Item Added to Cart");
//         }
//       } else {
//         const newItem = {
//           id: action.payload.id,
//           qty: action.payload.qty,
//           price: action.payload.price,
//           weight: action.payload.weight,
//         };
//         state.items.push(newItem);
//         toast.success("Item Added to Cart");
//       }

//       const { qty, total, totalWeight, sizeQuantities } = calculateTotals(state.items);
//       state.qty = qty;
//       state.total = total;
//       state.totalWeight = totalWeight;
//       state.sizeQuantities = sizeQuantities;
      
//       localStorage.setItem("cart", JSON.stringify(state.items));
//     },
//     removeItem: (state, action) => {
//       state.items = state.items.filter(
//         (item) => !(item.id === action.payload.id && item.weight === action.payload.weight)
//       );

//       const { qty, total, totalWeight, sizeQuantities } = calculateTotals(state.items);
//       state.qty = qty;
//       state.total = total;
//       state.totalWeight = totalWeight;
//       state.sizeQuantities = sizeQuantities;

//       localStorage.setItem("cart", JSON.stringify(state.items));
//     },
//     incQty: (state, action) => {
//       const existingItem = state.items.find(
//         (item) => item.id === action.payload.id && item.weight === action.payload.weight
//       );

//       if (existingItem && existingItem.qty < 10) {
//         existingItem.qty += 1;
//         const { qty, total, totalWeight, sizeQuantities } = calculateTotals(state.items);
//         state.qty = qty;
//         state.total = total;
//         state.totalWeight = totalWeight;
//         state.sizeQuantities = sizeQuantities;
        
//         localStorage.setItem("cart", JSON.stringify(state.items));
//       }
//     },
//     decQty: (state, action) => {
//       const existingItem = state.items.find(
//         (item) => item.id === action.payload.id && item.weight === action.payload.weight
//       );

//       if (existingItem) {
//         if (existingItem.qty > 1) {
//           existingItem.qty -= 1;
//         } else {
//           state.items = state.items.filter(
//             (item) => !(item.id === action.payload.id && item.weight === action.payload.weight)
//           );
//         }

//         const { qty, total, totalWeight, sizeQuantities } = calculateTotals(state.items);
//         state.qty = qty;
//         state.total = total;
//         state.totalWeight = totalWeight;
//         state.sizeQuantities = sizeQuantities;

//         localStorage.setItem("cart", JSON.stringify(state.items));
//       }
//     },
//   },
// });

// export const { toggleState, addItem, removeItem, incQty, decQty } = CartSlice.actions;
// export default CartSlice.reducer;
