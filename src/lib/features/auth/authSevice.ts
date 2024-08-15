import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from "../../store"
import { getTokens } from './authSlice';
import { useSelector } from 'react-redux';
// Update this path according to your project structure

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:9999/api/auth',
    prepareHeaders: (headers, { getState }) => {
      console.log("before disaster")
      const token = getState();
      console.log(token);
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
