import { BookResponse, Category } from "@/app/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface CategoryState {
  categories: Category[];
}

const initialState: CategoryState = {
    categories: [],
};

export const categoryReducer = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<Category[]>) => {
      return {
        ...state,
        categories: action.payload,
      };

    },
    getCategories: (state) => {
      return {
        ...state,
      };
    },
  },
});

export const {
    getCategories,
    setCategories,
} = categoryReducer.actions;

export default categoryReducer.reducer;
