import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  accessToken: string;
  role: string;
}

const initialState: AuthState = {
  accessToken: "",
  role: "",
};

export const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => {
      return initialState;
    },
    setCredentials: (state, action: PayloadAction<AuthState>) => {
      return {
        accessToken: action.payload.accessToken,
        role: action.payload.role,
      };
    },
    clearCredentials: (state) => {
      return {
        ...state,
        accessToken: "",
        role: "",
      };
    },
    getTokens: (state) => {
      return {
        ...state,
      };
    },
  },
});

export const { setCredentials, clearCredentials, logout, getTokens } = authReducer.actions;

export default authReducer.reducer;
