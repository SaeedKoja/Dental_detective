import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    Active: "Home"
};

const activeSlice = createSlice({
    name: "active",
    initialState: initialState,
    reducers: {
        replaceActiveState(state, action) {
            state.Active = action.payload;
        },
    }
});

export default activeSlice.reducer;
export const activeAction = activeSlice.actions;
