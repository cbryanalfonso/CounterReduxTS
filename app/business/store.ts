import {configureStore} from '@reduxjs/toolkit';
import counteReducer from './counterSlice';

export const store = configureStore({
  reducer: {
    counter: counteReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
