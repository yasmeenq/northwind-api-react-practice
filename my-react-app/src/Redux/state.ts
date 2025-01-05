import { ProductModel } from "../Models/ProductModel";
import { createSlice, configureStore } from "@reduxjs/toolkit";
import { add, update, remove, init } from "./reducers";


export type AppState = {
    products: ProductModel[],
    //employee: EmployeeModel[],
    //supplier: SupplierModel[]
}

const productSlice = createSlice({
    name:"products",  //slice name
    initialState:[], 
    reducers:{add, update, remove, init}
})
export const productActions = productSlice.actions; 
console.log("####this is the product actions", productActions);
export const productReducer = productSlice.reducer; 
console.log("####this is the product reducers", productReducer);

export const store = configureStore<AppState>({
        reducer: {
             products : productReducer
        } 
})