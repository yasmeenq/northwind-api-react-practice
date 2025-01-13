import { configureStore } from "@reduxjs/toolkit";
import { productReducer, userReducer, workerReducer } from "./slices";
import { ProductModel } from "../Models/ProductModel";
import { WorkerModel } from "../Models/WorkerModel";
import { UserModel } from "../Models/UserModel";

export type AppState = {
  products: ProductModel[];
  workers: WorkerModel[];
  user: UserModel;
}

export const store = configureStore<AppState>({
  reducer: {
    products: productReducer,
    workers: workerReducer,
    user: userReducer
  }
})
