import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        //actions
        //updating state, action-parameter used to define argument of addToCart function
        addToCart:(state,action)=>{
          state.push(action.payload) 
          
        },
        //id
        removeCart:(state,action)=>{
         return state.filter(i=>i.id!=action.payload)

        },        
         clearcart:(state)=>{
          return[]
         }

    }
})
//export reducer
export default cartSlice.reducer
//action
export const {addToCart,removeCart,clearcart}=cartSlice.actions