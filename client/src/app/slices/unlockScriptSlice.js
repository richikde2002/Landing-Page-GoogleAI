import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    unlockLoading: false,
    unlockRan: false,
}

export const unlockScriptSlice = createSlice({
    name: 'unlockScript',
    initialState,
    reducers: {
        startUnlockLoading: (state) => {
            state.unlockLoading = true;
        },
        endUnlockLoading: (state) => {
            state.unlockLoading = false;
        },
        unlockRanOnce: (state) => {
            state.unlockRan = true;
        },
        unlockReset: (state) => {
            state.unlockRan = false;
        },
    },
});

export const { startUnlockLoading, endUnlockLoading, unlockRanOnce, unlockReset } = unlockScriptSlice.actions;

export default unlockScriptSlice.reducer;