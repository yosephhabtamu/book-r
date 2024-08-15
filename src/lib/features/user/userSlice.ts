import { BookOwner, GetBookOwnersResponse } from "@/app/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  users?: GetBookOwnersResponse;
  user?: BookOwner;
}

const initialState: UserState = {
  users: {
    totalItems: 0,
    totalPages: 1,
    currentPage: 1,
    users: []
  },
  user: undefined
};

export const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<GetBookOwnersResponse>) => {
      state.users = action.payload;
    },
    setUser:(state)=>{
      return {
        ...state,
        user: state.user
      }
    }
  },
});

export const {setUsers, setUser } =
  userReducer.actions;

export default userReducer.reducer;
