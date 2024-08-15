import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from "../../store"
import { getTokens } from '../auth/authSlice';
import { useSelector } from 'react-redux';

export const bookApi = createApi({
  reducerPath: 'bookApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9999/api/books',
    prepareHeaders: (headers) => {
        const token = useSelector((state:RootState)=>state.authReducer.accessToken);
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