import { configureStore } from '@reduxjs/toolkit';
import userAuthReducer from '../features/authUserSlice';
import authMessageReducer from '../features/authMessageSlice';

export const store = configureStore({
  reducer: {
    userAuth: userAuthReducer,
    authMessage: authMessageReducer
  },
  devTools: true,
})

