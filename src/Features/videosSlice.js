
import { createSlice } from "@reduxjs/toolkit";

const videosSlice = createSlice({
  name: "videos",
  initialState: null,
  reducers: {
    setVideos: (state, action) => action.payload,
  },
});

export const { setVideos } = videosSlice.actions;

export default videosSlice.reducer;
