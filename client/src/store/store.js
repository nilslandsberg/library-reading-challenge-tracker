import { configureStore } from '@reduxjs/toolkit';
import userAuthReducer from '../features/authUserSlice';
import authMessageReducer from '../features/authMessageSlice';
import readersReducer from '../features/readerSlice';

export const store = configureStore({
  reducer: {
    userReaders: readersReducer,
    userAuth: userAuthReducer,
    authMessage: authMessageReducer,
  },
  devTools: true,
})

