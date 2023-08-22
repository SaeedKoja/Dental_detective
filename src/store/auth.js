import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const token = Cookies.get("token");

const initialState = {
  isLogged: !!token
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    loginHandler(state, action) {
      state.isLogged = true;
    },
    logoutHandler(state, action) {
      state.isLogged = false;
    }
  }
});

export default authSlice.reducer;
export const authAction = authSlice.actions;
