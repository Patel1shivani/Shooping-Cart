import { createSlice } from "@reduxjs/toolkit";

 export const Statuses=Object.freeze(
    {
        Success:'Success',
        Eroor:'Error',
        Loading:'Loading'
    }
)

const productSlice=createSlice({
    name:'product',
    initialState:{
    data:[],
    Status:Statuses.Success,
    },
    reducers:{
        setProducts(state,action){
            state.data=action.payload
        },
        setStatuses(state,action){
            state.Status=action.payload
        }
    }
})
export const {setProducts,setStatuses}=productSlice.actions;
export default productSlice.reducer


export function fetchproduct(){
    return async function fetchproductThunk(dispatch){
    dispatch(setStatuses(Statuses.Loading))
    try{
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        console.log(data)
        dispatch(setProducts(data));
        dispatch(setStatuses(Statuses.Success))
    }
    catch(error){
console.log(error)
dispatch(setStatuses(Statuses.Error))
    }
    }
}



// import { createSlice } from "@reduxjs/toolkit";

// export const Statuses = Object.freeze({
//   Success: 'Success',
//   Error: 'Error',
//   Loading: 'Loading'
// });

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState: {
//     items: [],
//     status: Statuses.Success,
//   },
//   reducers: {
//     addToCart(state, action) {
//       const { product, quantity } = action.payload;
//       const existingItemIndex = state.items.findIndex(item => item.product.id === product.id);

//       if (existingItemIndex !== -1) {
//         // If the product is already in the cart, update the quantity
//         state.items[existingItemIndex].quantity += quantity;
//       } else {
//         // Otherwise, add the product to the cart
//         state.items.push({ product, quantity });
//       }
//     },
//     removeFromCart(state, action) {
//       const indexToRemove = state.items.findIndex(item => item.product.id === action.payload);
//       if (indexToRemove !== -1) {
//         state.items.splice(indexToRemove, 1);
//       }
//     },
//     clearCart(state) {
//       state.items = [];
//     }
//   }
// });

// export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
// export default cartSlice.reducer;
