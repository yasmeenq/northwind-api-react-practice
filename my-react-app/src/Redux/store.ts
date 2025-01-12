import { configureStore } from "@reduxjs/toolkit";
import { productReducer, workerReducer } from "./slices";
import { ProductModel } from "../Models/ProductModel";
import { WorkerModel } from "../Models/WorkerModel";

export type AppState = {
  products: ProductModel[];
  workers: WorkerModel[];
}

export const store = configureStore<AppState>({
  reducer: {
    products: productReducer,
    workers: workerReducer
  }
})
