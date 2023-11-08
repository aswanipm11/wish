import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import wishlistslice from "./wishlistslice";
import productSlice from "./productSlice";


const store=configureStore({
reducer:{
cart:cartSlice,
wishlist:wishlistslice,
productSlice


}

})

export default store