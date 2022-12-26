import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { loadState, saveState } from "./localStorage";
import myAnswer from "./myAnswer";

export const store = configureStore({
  reducer: {
    myAnswer,
    preloadedState: loadState(),
  }
})

// store.subscribe(
//   // we use debounce to save the state once each 800ms
//   // for better performances in case multiple changes occur in a short time
//   () => {
//     saveState(store.getState());
//   },
// );

// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//  // RootState,
//   unknown,
//   Action<string>
// >;
