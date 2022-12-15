import notificationsReducer from "../slices/notificationsSlice";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
export interface CombinedState {
  notifications: any;
}

const rootReducer = combineReducers({
  notifications: notificationsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

// export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export default store;
