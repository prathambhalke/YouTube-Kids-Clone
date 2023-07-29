import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  likedVideos: [],
};

export const LikedVideosSlice = createSlice({
  name: "LikedVideosSlice",
  initialState,
  reducers: {
    addLikedVideos: (state, action) => {
      state.likedVideos.push(action.payload);
    },
    removeLikedVideos: (state, action) => {
      let filterdLikedVideos = state.likedVideos.filter(
        (item) => item.id.videoId !== action.payload.id.videoId
      );
      return { ...state, watchLater: [...filterdLikedVideos] };
    },
  },
});

export const { addLikedVideos } = LikedVideosSlice.actions;

export default LikedVideosSlice.reducer;
