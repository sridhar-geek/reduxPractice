import { configureStore } from "@reduxjs/toolkit";

// imports from anthor files
import cartReducer from './CartSlice'
import dialogReducer from './DialogSlice'


const store = configureStore({
    reducer:{
        cart: cartReducer,
        dialog: dialogReducer,
    }
})

export default store