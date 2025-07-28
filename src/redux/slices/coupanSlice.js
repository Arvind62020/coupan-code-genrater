import { createSlice } from "@reduxjs/toolkit";

const CoupanSlice = createSlice({
    name: "Coupan",
    initialState: [],
    reducers: {
        addCoupan: (state, action) => {
            state.push({
                id: Date.now(),
                text: action.payload.text,
                company: action.payload.company,
                product: action.payload.product,
                offer: action.payload.offer,
                isUsed: false
            });
        },
        removeCoupan: (state, action) => {
            return state.filter((coupan) => coupan.id !== action.payload);
        },
        updateCoupan: (state, action) => {
            return state.map((coupan) => 
                coupan.id === action.payload.id 
                ? { ...coupan, isUsed: true } 
                : coupan
  );
}

    },
});

export const { addCoupan, removeCoupan, updateCoupan } = CoupanSlice.actions;
export default CoupanSlice.reducer;