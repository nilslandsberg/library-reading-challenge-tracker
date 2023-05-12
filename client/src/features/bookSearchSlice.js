import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const apiKey = process.env.REACT_APP_BOOKS_API_KEY
const API_URL = 'https://www.googleapis.com/books/v1/volumes?q='

export const searchBooksByTitle = createAsyncThunk("reader/add", async(data, rejectWithValue) => {

  try {
    const response = await axios.get(API_URL + 'intitle:' + data + '&key=' + apiKey);
    const bookInfo = response.data.items;
    const primaryBookInfo = bookInfo.map(({ volumeInfo }) => volumeInfo);
    console.log(primaryBookInfo)
    return response;
  } catch (error) {
    if (!error?.response) {
      throw error;
    }
    return rejectWithValue(error?.response?.data);
  }
});