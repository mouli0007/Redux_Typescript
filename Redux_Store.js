import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import UserSlice from "./Components/Users";

export const store: any = configureStore({
  reducer: {
    users: UserSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
