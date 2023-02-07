import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Action
export const fetchData = createAsyncThunk('fetchData', async (input) => {
  const headers = { 'X-Api-Key': 'Ct9jwXeqr/G0TwTSh6rULw==Id0v4msWsavyfT5T' };
  console.log('IV', `${input.key}`);
  const response = await fetch(`https://api.api-ninjas.com/v1/country?${input.key}=${input.value}&limit=30`, { headers });
  const data = await response.json();
  return data;
});

const countrySlice = createSlice({
  name: 'covid',
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchData.pending, (state, action) => {
      state.isLoading = true;
      state.data = action.payload;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.isError = true;
      return ('Error: ', action.payload);
    });
  },
});

export default countrySlice.reducer;
