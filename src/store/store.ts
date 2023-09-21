import { configureStore} from "@reduxjs/toolkit";
import userSLice from "./userSlice";
import { authApi } from "./api/authApi";
import { postApi } from "./api/postApi";
import { commentApi } from "./api/commentApi";

export const store = configureStore({
  reducer: {
    userSLice,
    [authApi.reducerPath]: authApi.reducer,
    [postApi.reducerPath]: postApi.reducer,
    [commentApi.reducerPath]: commentApi.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat([
    authApi.middleware,
    postApi.middleware,
    commentApi.middleware,
  ])
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.getState