import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productSlice";
import testimonialReducer from "./slices/testimonialSlice";
import faqReducer from "./slices/faqSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    testimonials: testimonialReducer,
    faq: faqReducer,
  },
});

// ⭐ THESE MUST BE EXPORTED
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
