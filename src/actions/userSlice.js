import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: '',
    email: '',
    token: '',
    locaId: '',
    address: '',
    phone: '',
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    setUser: (state, action) => {
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.user.token = action.payload.token;
        state.user.localId = action.payload.localId;
        state.user.address.street = action.payload.address.street;
        state.user.address.latitude = action.payload.address.latitude;
    },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
