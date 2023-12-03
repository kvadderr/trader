import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';


type AuthState = {
  currentSymbol: string;
};

const slice = createSlice({
  name: 'auth',
  initialState: {
   currentSymbol: "BITSTAMP:BTCUSD"
  } as AuthState,
  reducers: {
    setCurrentSymbol: (state, action) => {
      state.currentSymbol = action.payload;
    }
  }
});

export const selectCurrentSymbol = (state: RootState): string =>
  state.authSlice.currentSymbol;
export const { setCurrentSymbol } = slice.actions;

export default slice.reducer;
