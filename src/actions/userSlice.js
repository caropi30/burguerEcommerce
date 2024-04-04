import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: '',
    email: '',
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    setUser: (state, action) => {
        state.value = action.payload;
    },
});

// Action creators are generated for each case reducer function
export const { setUser } = counterSlice.actions;

export default userSlice.reducer;
