import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from "../../store"
// Update this path according to your project structure

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:9999/api/users',
    prepareHeaders: (headers, { getState }) => {
      const state = getState() as RootState; // Explicitly typing getState
      const token = state.authReducer.accessToken;
      if (token) {
        headers.set('userorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUsers:builder.query({
      query: (params) => ({
        url: '',
        method: 'GET',
        params:{...params}
      }),
    }),

  }),
});

// Auto-generated based on the defined endpoints
export const { useGetUsersQuery } = userApi;
