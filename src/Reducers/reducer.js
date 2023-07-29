import { combineReducers } from "@reduxjs/toolkit";
import { watchLaterSlice } from "./../Features/watchLaterSlice";
import { LikedVideosSlice } from "../Features/likedVideosSlice";

export const rootReducer = combineReducers(watchLaterSlice, LikedVideosSlice);
