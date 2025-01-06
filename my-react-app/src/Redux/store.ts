import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./slices";
import { ProductModel } from "../Models/ProductModel";

export type AppState = {
  products: ProductModel[];
}

export const store = configureStore<AppState>({
  reducer: {
    products: productReducer,
  },
})
