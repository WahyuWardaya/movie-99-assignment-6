import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './movieRedux';

const store = configureStore({
  reducer: {
    movie: movieReducer,
  },
});

export default store;
