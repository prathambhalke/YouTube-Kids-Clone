import { combineReducers } from "@reduxjs/toolkit";
import { watchLaterSlice } from "./../Features/watchLaterSlice";
import { likedVideosSlice } from "./../Features/likedVideosSlice";

export const rootReducer = combineReducers({
  watchLaterSlice: watchLaterSlice.reducer,
  LikedVideosSlice: likedVideosSlice.reducer,
});
