import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "../services/auth-service";
import { setAuthMessage } from "./authMessageSlice";

const userData = JSON.parse(localStorage.getItem("user"));

const user = userData ? userData.user : null;

export const signup = createAsyncThunk("auth/signup", async(data, thunkAPI) => {
  const { username, email, password } = data;
  try {
    const response = await authService.signup(username, email, password);
    thunkAPI.dispatch(setAuthMessage(response.data.message));
    return response.data;
  } catch (error) {
    const message =
    (error.response &&
      error.response.data &&
      error.response.data.message) ||
      error.message ||
      error.toString();
      thunkAPI.dispatch(setAuthMessage(message));
      return thunkAPI.rejectWithValue();
  }
});

export const login = createAsyncThunk("auth/login", async(data, thunkAPI) => {
  const { username, password } = data;
  try {
    const response = await authService.login(username, password);
    thunkAPI.dispatch(setAuthMessage(`Welcome back, ${username}!`));
    return response;
  } catch (error) {
    const message =
    (error.response &&
      error.response.data &&
      error.response.data.message) ||
      error.message ||
      error.toString();
      thunkAPI.dispatch(setAuthMessage(message));
      return thunkAPI.rejectWithValue();
  }
});

export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout();
});

const initialState = user
  ? { isLoggedIn: true, user} 
  : { isLoggedIn: false };

const userAuthSlice = createSlice({
  name: "userAuth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(signup.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.newUser.username;
    });
    builder.addCase(signup.rejected, (state, action) => {
      state.isLoggedIn = false;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    });
  }
});

export default userAuthSlice.reducer