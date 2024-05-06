import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    morningUrl: null,
    morningLoading: false,
}

export const morningSetupSlice = createSlice({
    name: 'morningSetup',
    initialState,
    reducers: {
        setMorningUrl: (state, action) => {
            state.morningUrl = action.payload;
        },
        clearMorningUrl: (state) => {
            state.morningUrl = null;
        },
        startMorningLoading: (state) => {
            state.morningLoading = true;
        },
        endMorningLoading: (state) => {
            state.morningLoading = false;
        },
    },
});

export const { setMorningUrl, clearMorningUrl, startMorningLoading, endMorningLoading } = morningSetupSlice.actions;

export default morningSetupSlice.reducer;