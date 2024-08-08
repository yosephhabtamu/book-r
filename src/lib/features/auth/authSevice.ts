// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9999/api/auth' }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: 'login',
        method: 'POST',
        body: credentials,
      })
    }),
    signup: builder.mutation({
      query:(credentials)=>({
        url: 'signup',
        method: 'POST',
        body: credentials,
      })
    })
  }),
})

// auto-generated based on the defined endpoints
export const { useLoginMutation, useSignupMutation } = authApi