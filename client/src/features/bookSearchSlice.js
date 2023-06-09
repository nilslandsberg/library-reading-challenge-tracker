import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const apiKey = process.env.REACT_APP_BOOKS_API_KEY
const API_URL = 'https://www.googleapis.com/books/v1/volumes?q='

export const searchBooksByTitle = createAsyncThunk("bookSearch/Title", async(data, rejectWithValue) => {

  try {
    const response = await axios.get(API_URL + 'intitle:' + data + '&printType=books&key=' + apiKey);
      // logic to pull necessary data from the api response
    const bookInfo = response.data.items;
    const primaryBookInfo = bookInfo.map(({ volumeInfo }) => volumeInfo);
    return primaryBookInfo;
  } catch (error) {
    if (!error?.response) {
      throw error;
    }
    return rejectWithValue(error?.response?.data);
  }
});

export const searchBooksByAuthor = createAsyncThunk("bookSearch/author", async(data, rejectWithValue) => {

  try {
    const response = await axios.get(API_URL + 'inauthor:' + data + '&printType=books&key=' + apiKey);
    // logic to pull necessary data from the api response
    const bookInfo = response.data.items;
    const primaryBookInfo = bookInfo.map(({ volumeInfo }) => volumeInfo);
    return primaryBookInfo;
  } catch (error) {
    if (!error?.response) {
      throw error;
    }
    return rejectWithValue(error?.response?.data);
  }
});

export const searchBooksByKeyword = createAsyncThunk("bookSearch/keyword", async(data, rejectWithValue) => {

  try {
    const response = await axios.get(API_URL + data + '&printType=books&key=' + apiKey);
    // logic to pull necessary data from the api response
    const bookInfo = response.data.items;
    const primaryBookInfo = bookInfo.map(({ volumeInfo }) => volumeInfo);
    return primaryBookInfo;
  } catch (error) {
    if (!error?.response) {
      throw error;
    }
    return rejectWithValue(error?.response?.data);
  }
});

const initialState = {
  books: [],
}

const bookSearchSlice = createSlice({
  name: "bookSearchResults",
  initialState,
  reducers: {
    setSearchResults: (state, action) => {
      state.books = action.payload;
    },
  },
  extraReducers: (builder) => {
    // fulfilled searches include logic to return only books with ISBN numbers
    builder.addCase(searchBooksByTitle.fulfilled, (state, action) => {
      const booksWithISBN = action.payload.filter(book => book.industryIdentifiers && book.industryIdentifiers.length > 0);
      state.books = booksWithISBN;
      state.isLoading = false;
      state.error = undefined;
    });
    builder.addCase(searchBooksByTitle.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action?.payload;
    })
    builder.addCase(searchBooksByTitle.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(searchBooksByAuthor.fulfilled, (state, action) => {
      const booksWithISBN = action.payload.filter(book => book.industryIdentifiers && book.industryIdentifiers.length > 0);
      state.books = booksWithISBN;
      state.isLoading = false;
      state.error = undefined;
    });
    builder.addCase(searchBooksByAuthor.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action?.payload;
    })
    builder.addCase(searchBooksByAuthor.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(searchBooksByKeyword.fulfilled, (state, action) => {
      const booksWithISBN = action.payload.filter(book => book.industryIdentifiers && book.industryIdentifiers.length > 0);
      state.books = booksWithISBN;
      state.isLoading = false;
      state.error = undefined;
    });
    builder.addCase(searchBooksByKeyword.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action?.payload;
    })
    builder.addCase(searchBooksByKeyword.pending, (state, action) => {
      state.isLoading = true;
    });
  }
});

export default bookSearchSlice.reducer