import { BookResponse } from "@/app/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { set } from "zod";


interface BookState {
  books?: BookResponse;
  usersBooks?: BookResponse;
}

const initialState: BookState = {
    books: {
        totalItems: 0,
        totalPages: 0,
        currentPage: 0,
        books: [],
    },
    usersBooks: {
        totalItems: 0,
        totalPages: 0,
        currentPage: 0,
        books: [],
    },
};

export const bookReducer = createSlice({
  name: "book",
  initialState,
  reducers: {
    getusersBooks: (state) => {
      return {books: state.usersBooks};
    },
    setBooks: (state, action: PayloadAction<BookResponse>) => {
      return {
        ...state,
        books: action.payload,
      };

    },
    setUsersBooks: (state, action: PayloadAction<BookResponse>) => {
      return {
        ...state,
        usersBooks: action.payload,
      };
    },
  },
});

export const {
    getusersBooks,
    setBooks,
    setUsersBooks,
} = bookReducer.actions;

export default bookReducer.reducer;
