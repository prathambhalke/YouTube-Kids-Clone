import { combineReducers } from "@reduxjs/toolkit";
import { watchLaterSlice } from "./../Features/watchLaterSlice";

export const rootReducer = combineReducers(watchLaterSlice);
