import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from "../../store"
// Update this path according to your project structure

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:9999/api/auth',
    prepareHeaders: (headers, { getState }) => {
      const state = getState() as RootState; // Explicitly typing getState
      const token = state.authReducer.accessToken;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: 'login',
        method: 'POST',
        body: credentials,
      }),
    }),
    signup: builder.mutation({
      query: (credentials) => ({
        url: 'signup',
        method: 'POST',
        body: credentials,
      }),
    }),
    refresh: builder.query({
      query: () => ({
        url: 'refresh',
        method: 'GET',
      }),
    }),
  }),
});

// Auto-generated based on the defined endpoints
export const { useLoginMutation, useSignupMutation } = authApi;
