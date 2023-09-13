import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userSLice from "./userSlice";
import { authApi } from "./api/authApi";

export const store = configureStore({
  reducer: {
    userSLice,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat([
    authApi.middleware
  ])
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
