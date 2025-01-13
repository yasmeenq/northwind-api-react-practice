import { createSlice } from "@reduxjs/toolkit";
import { add, update, remove, init } from "./reducers";
import { login, register, logout } from "./reducers";

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


//User Slice 
export const userSlice = createSlice(
    {
    name: 'userSlice', 
    initialState: [],
    reducers: {login, register, logout}
    }
)
export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;


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
