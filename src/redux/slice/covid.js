import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Action
export const fetchData = createAsyncThunk('fetchData', async () => {
  const headers = { 'X-Api-Key': 'Ct9jwXeqr/G0TwTSh6rULw==Id0v4msWsavyfT5T' };
  const response = await fetch('https://api.api-ninjas.com/v1/covid19?country=Pakistan', { headers });
  console.log(' respone json: ', response.json());
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

export default covidSlice.reducer;
