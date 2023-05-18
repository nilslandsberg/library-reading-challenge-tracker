import axios from "axios";
import authHeader from "../services/auth-header";

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
  const { id, title, authors, description, pageCount, imageUrl } = data;

  try {
    const response = await axios.post(API_URL + id, { title: title, authors: authors, description: description, pages: pageCount, imageUrl: imageUrl }, authHeader());
    return response.data;
  } catch (error) {
    if (!error?.response) {
      throw error;
    }
    return rejectWithValue(error?.response?.data);
  }
});

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
    })
  }
});

export default readerDetailsSlice.reducer