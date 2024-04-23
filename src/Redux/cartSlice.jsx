import { createSlice } from "@reduxjs/toolkit";

const Slice=createSlice({
    name:"Cart",
    initialState:[],
    reducers:{
        add(state, action) {
            const existingItemIndex = state.findIndex(item => item.id === action.payload.id);
            if (existingItemIndex !== -1) {
              state[existingItemIndex].quantity += 1;
            } else {
              state.push({ ...action.payload, quantity:1 });
            }
          },
        remove(state,action){
            return state.filter((item)=>item.id !== action.payload)
        },
        incrementQuantity(state, action) {
            const itemIndex = state.findIndex(item => item.id === action.payload);
            if (itemIndex !== -1) {
              state[itemIndex].quantity += 1;
              state[itemIndex].price += state[itemIndex].price / (state[itemIndex].quantity - 1);
            }
          },
          decrementQuantity(state, action) {
            const itemIndex = state.findIndex(item => item.id === action.payload);
            if (itemIndex !== -1 && state[itemIndex].quantity > 1) {
              state[itemIndex].quantity -= 1;
              state[itemIndex].price -= state[itemIndex].price / (state[itemIndex].quantity + 1);
            }
          }
        }
      });
export const {add,remove, incrementQuantity, decrementQuantity}=Slice.actions;
export default Slice.reducer