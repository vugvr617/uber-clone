import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  origin: {
    coordinates: null,
    description: null,
  },
};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      console.log(action.payload);
      state.origin = action.payload;
    },
  },
});

export const { setOrigin } = locationSlice.actions;
export const selectOrigin = (state) => {
  return state.location.origin;
};
export default locationSlice.reducer;
