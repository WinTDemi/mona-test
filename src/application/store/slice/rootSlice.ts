import { createSlice } from '@reduxjs/toolkit';
import { setRootIdAction } from '../reducer/root/setRootIdAction';
import { clearRootIdAction } from '../reducer/root/clearRootIdAction';
import { RootInitialState } from '../types/rootType';

const initialState: RootInitialState = {
    value: {
        id: 0,
    }
}

const rootSlice = createSlice({
    name: 'root',
    initialState,
    reducers: {
        setRootIdAction,
        clearRootIdAction,
    },
});

// Xuất actions và reducer
export const { setRootIdAction: setRootId, clearRootIdAction: clearRootId } = rootSlice.actions;
export default rootSlice.reducer;
