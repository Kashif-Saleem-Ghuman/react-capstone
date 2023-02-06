import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Action
export const fetchRockets = createAsyncThunk('fetchRockets', async () => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  return response.json();
});

const covidSlice = createSlice({
  name: 'covid',
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
    reserved: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchRockets.pending, (state, action) => {
      state.isLoading = true;
      state.data = action.payload;
    });
    builder.addCase(fetchRockets.rejected, (state, action) => {
      state.isError = true;
      return ('Error: ', action.payload);
    });
  },
});

export default covidSlice.reducer;
