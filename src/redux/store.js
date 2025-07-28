// store.js
import { configureStore } from "@reduxjs/toolkit";
import coupanReducer from './slices/coupanSlice';
import companyReducer from './slices/companySlice';

const store = configureStore({
    reducer: {
        coupans: coupanReducer,
        companies: companyReducer
    }
});

export default store;