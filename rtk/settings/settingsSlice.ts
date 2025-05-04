import { createSlice } from '@reduxjs/toolkit';

interface initialStateI {
    reduxRun: boolean;
}

const initialState: initialStateI = {
    reduxRun: false,
};

const settingsReducer = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        setReduxRun: (state, action) => {
            state.reduxRun = true;
        },
    },
});

export default settingsReducer.reducer;
export const { setReduxRun } = settingsReducer.actions;
