import { combineReducers } from "@reduxjs/toolkit";
import { watchLaterSlice } from "./../Features/watchLaterSlice";
import { likedVideosSlice } from "./../Features/likedVideosSlice";
import { watchHistorySlice } from "../Features/watchHistorySlice";
import videosSlice from "../Features/videosSlice";

export const rootReducer = combineReducers({
  watchLaterSlice: watchLaterSlice.reducer,
  LikedVideosSlice: likedVideosSlice.reducer,
  watchHistorySlice: watchHistorySlice.reducer,
  videosSlice: videosSlice.reducer,
});
