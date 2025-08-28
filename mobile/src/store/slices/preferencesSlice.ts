import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface PreferencesState {
  theme: 'light' | 'dark' | 'system';
  language: string;
  onboardingComplete: boolean;
}

const initialState: PreferencesState = {
  theme: 'system',
  language: 'en',
  onboardingComplete: false,
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
    setOnboardingComplete(state, action: PayloadAction<boolean>) {
      state.onboardingComplete = action.payload;
    },
  },
});

export const { setTheme, setLanguage, setOnboardingComplete } = preferencesSlice.actions;
export default preferencesSlice.reducer;
