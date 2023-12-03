import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';


type AuthState = {
  currentSymbol: string;
  currentLang: string;
};

const slice = createSlice({
  name: 'auth',
  initialState: {
    currentSymbol: "BITSTAMP:BTCUSD",
    currentLang: "ru"
  } as AuthState,
  reducers: {
    setCurrentSymbol: (state, action) => {
      state.currentSymbol = action.payload;
    },
    setCurrentLang: (state, action) => {
      state.currentLang = action.payload;
    }
  }
});

export const selectCurrentSymbol = (state: RootState): string =>
  state.authSlice.currentSymbol;
export const selectCurrentLang = (state: RootState): string =>
  state.authSlice.currentLang;
export const { setCurrentSymbol, setCurrentLang } = slice.actions;

export default slice.reducer;
