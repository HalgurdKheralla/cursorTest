import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface PreferencesState {
  theme: 'light' | 'dark' | 'system';
  language: string;
}

const initialState: PreferencesState = {
  theme: 'system',
  language: 'en',
};

const preferencesSlice = createSlice({
  name: 'preferences',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<'light' | 'dark' | 'system'>) {
      state.theme = action.payload;
    },
    setLanguage(state, action: PayloadAction<string>) {
      state.language = action.payload;
    },
  },
});

export const { setTheme, setLanguage } = preferencesSlice.actions;
export default preferencesSlice.reducer;
