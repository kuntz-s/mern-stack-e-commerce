import {configureStore} from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";
import userSlice from "./userSlice";

export const store = configureStore({
    reducer:{
        data: dataSlice,
        user: userSlice
    }
})