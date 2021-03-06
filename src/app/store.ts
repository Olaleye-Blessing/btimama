import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { githubApi } from "../services/github";

export const store = configureStore({
    reducer: {
        [githubApi.reducerPath]: githubApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(githubApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
