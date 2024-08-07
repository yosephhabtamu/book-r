import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type LoginPayload = {
    accessToken: string;
    refreshToken: string;
    role:string;
}

interface AuthState {
    accessToken:string;
    refreshToken:string;
    loading: boolean;
    error: any | null;
    role:string;
  }
  
  const initialState: AuthState = {
    loading: false,
    error: null,
    accessToken: "",
    refreshToken: "",
    role:""
  };
  

export const authReducer = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: () => {
        return initialState;
        },
        login: (state, action:PayloadAction<LoginPayload> ) => {
       return {
        ...state,
        accessToken : action.payload.accessToken,
        role : action.payload.role,
        refreshToken : action.payload.refreshToken,
        }}

    },
    });

export const { login, logout } = authReducer.actions;

export default authReducer.reducer;