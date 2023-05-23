import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import authHeader from "../services/auth-header";

const API_URL = "http://localhost:8000/api/readers/"

export const addReaderAction = createAsyncThunk("reader/add", async(data, rejectWithValue) => {
  const { name, age, avatar } = data;

  try {
    const response = await axios.post(API_URL, { name: name, age: age, avatar: avatar }, authHeader());
    return response.data;
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
    return data;
  } catch (error) {
    if (!error?.response) {
      throw error;
    }
    return rejectWithValue(error?.response?.data);
  }
});

export const updateReaderAction = createAsyncThunk("reader/update", async(data, rejectWithValue) => {
  const { _id, name, age, avatar } = data;

  try {
    const response = await axios.patch(API_URL + _id, { name: name, age: age, avatar: avatar }, authHeader());
    console.log(response.data)
    return response.data;
  } catch (error) {
    if (!error?.resposne) {
      throw error;
    }
    return rejectWithValue(error?.response?.data);
  }
});

export const deleteReaderAction = createAsyncThunk("reader/delete", async(id, rejectWithValue) => {
  try {
    const response = await axios.delete(API_URL + id, authHeader());
    console.log(response.data);
    return response.data;
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
      return {
        ...state,
        error: undefined,
        readers: [...state.readers, action.payload.newReader]
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
    });
    builder.addCase(updateReaderAction.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(updateReaderAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = undefined;
      const { id, name, age, avatar } = action.payload.updatedReader;
      
      // Create a new array with updated reader
      state.readers = state.readers.map(reader => {
        if (reader._id === id) {
          return {
            ...reader,
            name,
            age,
            avatar,
          };
        }
        return reader;
      });
    });
    builder.addCase(updateReaderAction.rejected, (state, action) => {
      state.error = action?.payload;
      state.isLoading = false;
    });
    builder.addCase(deleteReaderAction.fulfilled, (state, action) => {
      state.error = undefined;
      // remove deleted reader from state in the store
      state.readers = state.readers.filter(
        (reader) => reader._id !== action.payload
      );
    })
  }
});

export default readerSlice.reducer