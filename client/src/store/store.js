import { configureStore } from '@reduxjs/toolkit';
import userAuthReducer from '../features/userAuthSlice';
import authMessageReducer from '../features/authMessageSlice';
import readersReducer from '../features/readerSlice';
import bookSearchReducer from '../features/bookSearchSlice';
import readerDetailsReducer from '../features/readerDetailsSlice';
import bookRecommendationReducer from '../features/bookRecommendationSlice';

export const store = configureStore({
  reducer: {
    userReaders: readersReducer,
    readerDetails: readerDetailsReducer,
    bookSearchResults: bookSearchReducer,
    bookRecommendations: bookRecommendationReducer,
    userAuth: userAuthReducer,
    authMessage: authMessageReducer,
  },
  devTools: true,
})

