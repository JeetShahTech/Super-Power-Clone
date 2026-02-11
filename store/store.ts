import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

// ⭐ THESE MUST BE EXPORTED
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
