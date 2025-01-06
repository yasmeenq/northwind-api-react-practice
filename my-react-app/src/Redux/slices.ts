import { createSlice } from "@reduxjs/toolkit";
import { add, update, remove, init } from "./reducers";

//create a slice
export const productSlice = createSlice({
    name: 'productSlice',
    initialState: [],
    reducers: {add, update, remove, init}
}) 
//deconstruct actions and reducer
export const productReducer = productSlice.reducer;
export const productActions = productSlice.actions;
