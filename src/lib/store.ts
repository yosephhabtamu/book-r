import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./features/user/userSlice";
import { bookApi } from "./features/books/bookService";
import bookReducer from "./features/books/bookSlice";
import categoryReducer from "./features/book-category/categorySlice";
import { categoryApi } from "./features/book-category/categoryService";
import { userApi } from "./features/user/userSevice";
import { authApi } from "./features/auth/authSevice";
import  authReducer  from "./features/auth/authSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      [authApi.reducerPath]: authApi.reducer,
      authReducer,
      [bookApi.reducerPath]: bookApi.reducer,
      bookReducer,
      [categoryApi.reducerPath]: categoryApi.reducer,
      categoryReducer,
      [userApi.reducerPath]: userApi.reducer,
      userReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([
        authApi.middleware,
        bookApi.middleware,
        categoryApi.middleware,
        userApi.middleware, 
      ]),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
