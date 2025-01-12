import { createSlice } from "@reduxjs/toolkit";
import { add, update, remove, init } from "./reducers";

//Products Slice
//create a slice
export const productSlice = createSlice({
    name: 'productSlice',
    initialState: [],
    reducers: {add, update, remove, init}
}) 
//deconstruct actions and reducer
export const productReducer = productSlice.reducer;
export const productActions = productSlice.actions;


//Worker Slice
export const workerSlice = createSlice(
    {
        name: 'workerSlice',
        initialState: [],
        reducers: {init}
    }
)
export const workerReducer = workerSlice.reducer;
export const workerAction = workerSlice.actions;