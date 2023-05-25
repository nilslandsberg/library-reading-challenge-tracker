import axios from "axios";
import authHeader from "../services/auth-header";
import { toast } from 'react-toastify';


const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");

const API_URL = "http://localhost:8000/api/books/"

// GET - get book recommendations by age group
export const fetchBookRecommendationsByAgeGroupAction = createAsyncThunk("bookRecommedationsByAgeGroup/fetch", async(ageGroup, rejectWithValue) => {
  try {
    const response = await axios.get(API_URL + 'age-group/' + ageGroup, authHeader());
    return response.data
  } catch (error) {
    if (!error?.response) {
      throw error;
    }
    return rejectWithValue(error?.response?.data);
  }
});

// POST - add book recommendation
export const addBookRecommendationAction = createAsyncThunk("bookRecommendation/add", async(data, rejectWithValue) => {
  const { title, authors, description, pageCount, imageUrl, isbn, ageGroup, recommendation, readerId } = data;
  try {
    const response = await axios.post(API_URL, { title: title, authors: authors, description: description, pages: pageCount, imageUrl: imageUrl, isbn: isbn, ageGroup: ageGroup, recommendation: recommendation, readerId: readerId }, authHeader());
    toast.success("Book recommendation added!"); // Display success message
    return response.data;
  } catch (error) {
    if (!error?.response) {
      throw error;
    }
    return rejectWithValue(error?.response?.data);
  }
});

const initialState = {
  recommendations: []
};

const bookRecommendationSlice = createSlice({
  name: "recommendations",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBookRecommendationsByAgeGroupAction.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchBookRecommendationsByAgeGroupAction.fulfilled, (state, action) => {
      state.recommendations = action.payload.books
      state.isLoading = false;
      state.error = undefined;
    });
    builder.addCase(fetchBookRecommendationsByAgeGroupAction.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action?.payload;
    });
    builder.addCase(addBookRecommendationAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = undefined;
    });
    builder.addCase(addBookRecommendationAction.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action?.payload;
    });
    builder.addCase(addBookRecommendationAction.pending, (state, action) => {
      state.isLoading = true;
      state.error = undefined;
    });
  }
});

export default bookRecommendationSlice.reducer