import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import cartItems from "../Components/cartItems";
import axios from "axios";


const initialState = {
    items: cartItems,
    amount:1,
    total:10,
    isLoading: true
}
// url of the json data
const url = 'https://course-api.com/react-useReducer-cart-project'
// async thunk function to fetch data
export const getApiData = createAsyncThunk('cartItems', async()=> {
    try {
        const response = await axios.get(url)
        console.log(response.data)
        return response.data
    } catch (error) {
        console.log(error)
    }
})


const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        clearCart: (state)=>{
            state.items = []
        },
        removeItem: (state, action)=> {
            const productId = action.payload
            state.items = state.items.filter((item)=> item.id !== productId) 
        },
        increaseItem: (state, action)=>{
            const product = state.items.find((item)=> item.id === action.payload)
            product.amount = product.amount +1
        },
        decreaseItem: (state, {payload})=>{
            const product = state.items.find((item)=> item.id === payload)
            product.amount = product.amount -1
        },
        calculateTotal :(state)=>{
            let total = 0
            let amount = 0
            state.items.forEach((item)=> {
            amount += item.amount
            total += item.amount * item.price
             } )
             state.amount = amount;
             state.total = total;
        }
    },
    // extraReducers:{
    //     [getApiData.pending] : (state)=> {
    //         state.isLoading = true
    //     },
    //     [getApiData.fulfilled] : (state, action)=> {
    //         state.items = action.payload
    //         state.isLoading = false
    //     },
    //     [getApiData.rejected] : (state)=> {
    //         state.isLoading = false
    //     }
    // }
})

console.log(cartSlice)

export const {clearCart, removeItem, increaseItem, decreaseItem, calculateTotal} = cartSlice.actions

export default cartSlice.reducer