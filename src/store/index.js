import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import activeReducer from "./active-ui"

const store = configureStore({
  reducer: { auth: authReducer, active: activeReducer }
});

export default store;
