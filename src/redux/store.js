import { configureStore } from '@reduxjs/toolkit';
import covidReducer from './slice/Country';

const store = configureStore({
  reducer: {
    covid: covidReducer,
  },
});

export default store;
