import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import authHeader from "../services/auth-header";

const API_URL = "http://localhost:8000/api/readers/"

export const addReaderAction = createAsyncThunk("reader/add", async(data, rejectWithValue) => {
  const { name, age, avatar } = data;
  try {
    const response = await axios.post(API_URL, { name: name, age: age, avatar: avatar }, authHeader());
    return response;
  } catch (error) {
    if (!error?.response) {
      throw error;
    }
    return rejectWithValue(error?.response?.data);
  }
});

export const getReadersAction = createAsyncThunk("readers/fetch", async(rejectWithValue) => {
  try {
    const { data } = await axios.get(API_URL, authHeader());
    console.log(data)
    return data;
  } catch (error) {
    if (!error?.response) {
      throw error;
    }
    return rejectWithValue(error?.response?.data);
  }
});

const initialState = {
  readers: []
};

const readerSlice = createSlice({
  name: "Readers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addReaderAction.fulfilled, (state, action) => {
      state.error = undefined;
      return {
        readers: [...state.readers, action.payload.data.newReader]
      };
    });
    builder.addCase(addReaderAction.rejected, (state, action) => {
      state.error = action?.payload;
    })
    builder.addCase(getReadersAction.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getReadersAction.fulfilled, (state, action) => {
      state.readers = action.payload.readers;
      state.isLoading = false;
      state.error = undefined;
    });
    builder.addCase(getReadersAction.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action?.payload;
    })
  }
});

export default readerSlice.reducer