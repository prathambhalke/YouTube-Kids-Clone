import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  watchLater: [],
}; 

export const watchLaterSlice = createSlice({
  name: "watchLaterSlice",
  initialState,
  reducers: {
    increment: (state) => {
      state.num += 1;
    },
    decrement: (state) => {
      state.num -= 1;
    },
  },
});

export const { increment, decrement } = watchLaterSlice.actions;

export default watchLaterSlice.reducer;
