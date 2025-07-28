// companySlice.js
import { createSlice } from "@reduxjs/toolkit";

const companySlice = createSlice({
    name: "company",
    initialState: [],
    reducers: {
        addCompany: (state, action) => {
            state.push({
                id: Date.now(),
                company: action.payload.company,
                type: action.payload.type,
                product: action.payload.product,
            });
        },
        removeCompany: (state, action) => {
            return state.filter((company) => company.id !== action.payload);
        },
        updateCompany: (state, action) => {
            return state.map((company) => 
                company.id === action.payload.id 
                ? { ...company, ...action.payload.updates } 
                : company
            );
        }
    },
});

export const { addCompany, removeCompany, updateCompany } = companySlice.actions;
export default companySlice.reducer;