import { authApi } from "@/store/auth/authApi";
import authReducer from "@/store/auth/authSlice";
import { productApi } from "@/store/product/productApi";
import productReducer from "@/store/product/productSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    // feature slices
    product: productReducer,
    auth: authReducer,

    // RTK Query APIs
    [productApi.reducerPath]: productApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(productApi.middleware, authApi.middleware), // add RTK Query middleware
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
