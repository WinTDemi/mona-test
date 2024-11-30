import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './slice/rootSlice'; // Import rootSlice

const store = configureStore({
    reducer: {
        root: rootReducer, // Thêm root slice vào store
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
