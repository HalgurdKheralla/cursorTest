import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  accessToken: string | null;
  isAuthenticated: boolean;
  userEmail: string | null;
}

const initialState: AuthState = {
  accessToken: null,
  isAuthenticated: false,
  userEmail: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn(state, action: PayloadAction<{ token: string; email: string }>) {
      state.accessToken = action.payload.token;
      state.userEmail = action.payload.email;
      state.isAuthenticated = true;
    },
    signOut(state) {
      state.accessToken = null;
      state.userEmail = null;
      state.isAuthenticated = false;
    },
  },
});

export const { signIn, signOut } = authSlice.actions;
export default authSlice.reducer;
