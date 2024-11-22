import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = 'c6f41934';
const API_URL = 'http://www.omdbapi.com/';

export const fetchMovies = createAsyncThunk('movie/fetchMovies', async ({ keyword, page }, thunkAPI) => {
  const response = await axios.get(API_URL, {
    params: {
      s: keyword,
      page,
      apikey: API_KEY,
    },
  });

  if (response.data.Error) {
    return thunkAPI.rejectWithValue(response.data.Error);
  }
  console.log(response.data);
  return response.data.Search || [];
});

const movieRedux = createSlice({
  name: 'movie',
  initialState: {
    movies: [],
    keyword: 'movie',
    page: 1,
    status: 'idle',
  },
  reducers: {
    setKeyword(state, action) {
      state.keyword = action.payload;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'succes';
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed';
        console.error(action.payload || 'Failed to fetch movies');
      });
  },
});

export const { setKeyword, setPage } = movieRedux.actions;
export default movieRedux.reducer;
