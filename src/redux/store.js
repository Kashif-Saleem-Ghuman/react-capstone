import { configureStore } from '@reduxjs/toolkit';
import covidReducer from './slice/covid';

const store = configureStore({
  reducer: {
    covid: covidReducer,
  },
});

export default store;
