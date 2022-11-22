import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import myAnswer from "./myAnswer";

export const store = configureStore({
  reducer: {
    myAnswer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
