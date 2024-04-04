import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    idToken: '',
};

export const idTokenSlice = createSlice({
    name: 'idToken',
    initialState,
    reducers: {
        setIdToken: (state, action) => {
            state.idToken = action.payload;
        },
    },
});

export const { setIdToken } = idTokenSlice.actions;

export default idTokenSlice.reducer;
