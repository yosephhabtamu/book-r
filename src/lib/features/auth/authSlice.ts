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
        ...state,
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
  },
});

export const {
  setCredentials,
  clearCredentials,
  logout,
} = authReducer.actions;

export default authReducer.reducer;
