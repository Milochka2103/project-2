import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/auth";
import { predictionsReducer } from "./slices/predictions";

const reducer = {
  auth: authReducer,
  predictions: predictionsReducer,
}

export const store = configureStore({
  reducer,
})