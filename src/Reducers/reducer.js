import { combineReducers } from "@reduxjs/toolkit";
import { counterSlice } from "./../Features/counterSlice";

export const rootReducer = combineReducers(counterSlice.reducer);
