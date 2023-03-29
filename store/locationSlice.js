import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  origin: {
    coordinates: null,
    description: null,
  },
  destination: {
    coordinates: null,
    description: null,
  },
};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
  },
});

export const { setOrigin, setDestination } = locationSlice.actions;
export const selectOrigin = (state) => {
  return state.location.origin;
};
export const selectDestination = (state) => {
  return state.location.destination;
};
export default locationSlice.reducer;
