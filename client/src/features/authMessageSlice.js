import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const authMessageSlice = createSlice({
  name: "authMessage",
  initialState,
  reducers: {
    setAuthMessage: (state, action) => {
      return { message: action.payload };
    },
    clearAuthMessage: () => {
      return { message: "" };
    },
  },
});

const { actions } = authMessageSlice;

export const { setAuthMessage, clearAuthMessage } = actions;
export default authMessageSlice.reducer;