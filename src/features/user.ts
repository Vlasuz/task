import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../types";

interface UserState {
  info: IUser;
}

const initialState: UserState = {
  info: {} as IUser,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.info = action.payload;
    },
    removeUser: (state) => {
      state.info = {} as IUser
    }
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
