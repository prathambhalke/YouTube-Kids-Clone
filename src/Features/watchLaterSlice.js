import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  watchLater: [],
};

export const watchLaterSlice = createSlice({
  name: "watchLaterSlice",
  initialState,
  reducers: {
    watchLaterVideos: (state, action) => {
      state.watchLater.push(action.payload.data);
    },
  },
});

export const { increment, decrement } = watchLaterSlice.actions;

export default watchLaterSlice.reducer;
