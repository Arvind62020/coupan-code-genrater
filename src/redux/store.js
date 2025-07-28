import { configureStore } from "@reduxjs/toolkit";
import coupanReducer from './slices/coupanSlice';

const store =configureStore ({
    reducer: {
        coupans: coupanReducer
    }
});
export default store;