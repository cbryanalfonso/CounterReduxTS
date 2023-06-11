import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface CounterState {
  value: number;
  products: any[];
}

const initialState: CounterState = {
  value: 0,
  products: [],
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    getProduct: state => {
      // Realizar la solicitud HTTP y actualizar products de manera inmutable
      fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(response => {
          // state.products = response; // Esto no es válido en Redux Toolkit
          // En su lugar, retorna un nuevo estado con los productos actualizados
          return {
            ...state,
            products: response,
          };
        });
    },
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
  getProduct,
} = counterSlice.actions;
export default counterSlice.reducer;
