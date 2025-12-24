import { removeLocalStorageItem } from "@/utils/localStorage";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "./authTypes";

interface AuthState {
  user: User | null;
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  user: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
      state.isLoggedIn = !!action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
      removeLocalStorageItem("USER_TOKEN");
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
