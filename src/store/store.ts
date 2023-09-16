import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userSLice from "./userSlice";
import { authApi } from "./api/authApi";
import { postApi } from "./api/postApi";

export const store = configureStore({
  reducer: {
    userSLice,
    [authApi.reducerPath]: authApi.reducer,
    [postApi.reducerPath]: postApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat([
    authApi.middleware,
    postApi.middleware,
  ])
});

export type RootState = ReturnType<typeof store.getState>;