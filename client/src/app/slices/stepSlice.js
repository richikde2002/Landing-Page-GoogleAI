import { createSlice } from "@reduxjs/toolkit";
import { clearMorningUrl } from "./morningSetupSlice";

const initialState = {
    value: 0,
}

export const stepSlice = createSlice({
    name: 'step',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        navigate: (state, action) => {
            state.value = action.payload;
        },
        reset: (state, action) => {
            state.value = 0;
        }
    },
});

export const { increment, decrement, navigate, reset } = stepSlice.actions;

export default stepSlice.reducer;