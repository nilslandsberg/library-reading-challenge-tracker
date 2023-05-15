import axios from "axios";
import authHeader from "../services/auth-header";

const { createAsyncThunk } = require("@reduxjs/toolkit");

const API_URL = "http://localhost:8000/api/readers/"

export const addBookToReaderAction = createAsyncThunk("book/addToReader", async(data, rejectWithValue) => {
  const { id, title, authors, description, pageCount, imageUrl } = data;

  try {
    const response = await axios.post(API_URL + id, { title: title, authors: authors, description: description, pages: pageCount, imageUrl: imageUrl }, authHeader());
    return response;
  } catch (error) {
    if (!error?.response) {
      throw error;
    }
    return rejectWithValue(error?.response?.data);
  }
});