// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from "../../store"

// Define a service using a base URL and expected endpoints
export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9999/api/categories',
    prepareHeaders: (headers, { getState }) => {
        const state = getState() as RootState; 
        const token = state.authReducer.accessToken
        if (token) {
          headers.set('authorization', `Bearer ${token}`);
        }
        return headers;
      },
   }),
  
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => ({
        url: '',
        method: 'GET',
      })
    })
  }),
})

// auto-generated based on the defined endpoints
export const { useGetCategoriesQuery,  } = categoryApi