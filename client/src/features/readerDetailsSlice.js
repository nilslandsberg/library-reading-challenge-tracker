import axios from "axios";
import authHeader from "../services/auth-header";
import { toast } from 'react-toastify';


const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");

const API_URL = "http://localhost:8000/api/readers/"

export const fetchReaderDetailsAction = createAsyncThunk("readerDetails/fetch", async(id, rejectWithValue) => {
  try {
    const response = await axios.get(API_URL + id, authHeader());
    return response.data
  } catch (error) {
    if (!error?.response) {
      throw error;
    }
    return rejectWithValue(error?.response?.data);
  }
});

export const addBookToReaderAction = createAsyncThunk("book/addToReader", async(data, rejectWithValue) => {
  const { id, title, authors, description, pageCount, imageUrl, isbn } = data;

  try {
    const response = await axios.post(API_URL + id, { title: title, authors: authors, description: description, pages: pageCount, imageUrl: imageUrl, isbn: isbn }, authHeader());
    toast.success("Book added to reader's list successfully"); // Display success message
    return response.data;
  } catch (error) {
    if (!error?.response) {
      throw error;
    }
    return rejectWithValue(error?.response?.data);
  }
});

export const removeBooksFromReaderAction = createAsyncThunk("books/deleteFromReader", async(data, rejectWithValue) => {
  const { readerId, bookIds } = data;
  try {
    const response = await axios.patch(API_URL + readerId + '/books', { bookIds: bookIds }, authHeader());
    return bookIds;
  } catch (error) {
    if (!error?.response) {
      throw error
    }
    console.log(error.response.data)
    return rejectWithValue(error?.response?.data)
  }
})

const initialState = {
  readerDetails: {}
};

const readerDetailsSlice = createSlice({
  name: "readerDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchReaderDetailsAction.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchReaderDetailsAction.fulfilled, (state, action) => {
      state.readerDetails = action.payload.reader;
      state.isLoading = false;
      state.error = undefined;
    });
    builder.addCase(fetchReaderDetailsAction.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action?.payload;
    });
    builder.addCase(removeBooksFromReaderAction.fulfilled, (state, action) => {
      const bookIdsToRemove = action.payload;
      // use filter to create new state that excludes books with _ids that match bookIdsToRemove
      state.readerDetails.books = state.readerDetails.books.filter((book) => !bookIdsToRemove.includes(book._id));
      console.log(state.readerDetails.books);
    })
  }
});

export default readerDetailsSlice.reducer