// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from "../../store"

// Define a service using a base URL and expected endpoints
export const bookApi = createApi({
  reducerPath: 'bookApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9999/api/books',
    prepareHeaders: (headers, { getState }) => {
        const state = getState() as RootState; 
        const token = state.authReducer.accessToken;
        console.log("**********");
        console.log(state);
        if (token) {
          headers.set('authorization', `Bearer ${token}`);
        }
        return headers;
      },
   }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: (params:any) => ({
        url: '',
        method: 'GET',
        params:{...params}
      })
    }),
    addBook: builder.mutation({
      query:(body)=>({
        url: '',
        method: 'POST',
        body
      })
    })
  }),
})

// auto-generated based on the defined endpoints
export const { useAddBookMutation,useGetBooksQuery } = bookApi