import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface ApiState {
  value: number;
}

const initialState: ApiState = {
  value: 0,
};

const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
      
    increment: state => {
      state.value++;
    },
    decrement: state => {
      state.value--;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
    reset: state => {
      state.value = 0;
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  reset,
} = apiSlice.actions;
export default apiSlice.reducer;
