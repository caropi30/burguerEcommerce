import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    idToken: {
        name: '',
        email: '',
        token: '',
        locaId: '',
        address: '',
        phone: '',
    },
    address: {
        street: '',
        latitude: '',
        longitude: '',

    },
};

export const idTokenSlice = createSlice({
    name: 'idToken',
    initialState,
    reducers: {
        setIdToken: (state, action) => {
            state.idToken.name = action.payload.name;
            state.idToken.email = action.payload.email;
            state.idToken.token = action.payload.token;
            state.idToken.localId = action.payload.localId;
            state.idToken.address = action.payload.address;
        },
        setAddress: (state, action) => {
            state.address.street = action.payload.street;
            state.address.latitude = action.payload.latitude;
            state.address.longitude = action.payload.longitude;
        },
    },
});

export const { setIdToken, setAddress } = idTokenSlice.actions;

export default idTokenSlice.reducer;