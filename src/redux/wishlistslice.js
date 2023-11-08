import { createSlice } from "@reduxjs/toolkit";

const wishlistslice=createSlice({
    name:'wishlist',
    initialState:[],
    reducers:{
        //action
        addToWishlist:(state,action)=>{
          state.push(action.payload)  
        },
        removeWishlist:(state,action)=>{
          return state.filter(i=>i.id!=action.payload)
 
         }
 
    }
})

export default wishlistslice.reducer

export const {addToWishlist,removeWishlist}=wishlistslice.actions