import { configureStore } from '@reduxjs/toolkit';
import userAuthReducer from '../features/userAuthSlice';
import authMessageReducer from '../features/authMessageSlice';
import readersReducer from '../features/readerSlice';
import bookSearchReducer from '../features/bookSearchSlice';

export const store = configureStore({
  reducer: {
    userReaders: readersReducer,
    bookSearchResults: bookSearchReducer,
    userAuth: userAuthReducer,
    authMessage: authMessageReducer,
  },
  devTools: true,
})

