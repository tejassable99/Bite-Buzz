import { createSlice } from "@reduxjs/toolkit"
import toast from 'react-hot-toast';
const initialState = {
    carts: []
}

// card slice
const cartSlice = createSlice({
    name: "cartslice",
    initialState,
    reducers: {

        // add to cart
        addToCart: (state, action) => {

            const IteamIndex = state.carts.findIndex((iteam) => iteam.id === action.payload.id);

            if (IteamIndex >= 0) {
                toast.error("Item already present in Cart!!!")
            } 
            else {
                const temp = { ...action.payload, qnty: 1 }
                state.carts = [...state.carts, temp]
                toast.success("Item added In Your Cart")

            }
        },
        //increment qty
        addIncreToCart: (state, action) => {

            const IteamIndex = state.carts.findIndex((iteam) => iteam.id === action.payload.id);

            if (IteamIndex >= 0) {
                state.carts[IteamIndex].qnty += 1
               
            }},
        // remove perticular iteams
        removeToCart:(state,action)=>{
            const data = state.carts.filter((ele)=>ele.id !== action.payload);
            state.carts = data
        },

        // remove single iteams
        removeSingleIteams:(state,action)=>{
            const IteamIndex_dec = state.carts.findIndex((iteam) => iteam.id === action.payload.id);

            if(state.carts[IteamIndex_dec].qnty >=1){
                state.carts[IteamIndex_dec].qnty -= 1
            }

        },

        // clear cart
        emptycartIteam:(state,action)=>{
            state.carts = []
        }
    }
});

export const { addToCart,removeToCart,removeSingleIteams ,emptycartIteam,addIncreToCart} = cartSlice.actions;

export default cartSlice.reducer;


