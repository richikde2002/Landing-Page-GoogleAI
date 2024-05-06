import { configureStore } from '@reduxjs/toolkit';
import stepReducer from './slices/stepSlice';
import morningSetupReducer from './slices/morningSetupSlice';
import unlockScriptReducer from './slices/unlockScriptSlice';

export const store = configureStore({
    reducer: {
        step: stepReducer,
        morningSetup: morningSetupReducer,
        unlockScript: unlockScriptReducer,
    },
});