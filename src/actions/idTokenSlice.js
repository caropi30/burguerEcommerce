import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    idToken: {
        email: '',
        token: '',
        locaId: '',
    },
    address: {
        street: '',
        latitude: '',
        longitude: '',
    },
    userData: {
        name: '',
        email: '',
        phone: '',
    },
}

export const idTokenSlice = createSlice({
    name: 'idToken',
    initialState,
    reducers: {
        setIdToken: (state, action) => {
            state.idToken.email = action.payload.email
            state.idToken.token = action.payload.token
            state.idToken.localId = action.payload.localId
        },
        setAddress: (state, action) => {
            state.address.street = action.payload.street
            state.address.latitude = action.payload.latitude
            state.address.longitude = action.payload.longitude
        },
        setUserData: (state, action) => {
            state.userData.name = action.payload.name
            state.userData.email = action.payload.email
            state.userData.phone = action.payload.phone
        },
        setClearIdToken: (state) => {
            state.idToken.email = ''
            state.idToken.token = ''
            state.idToken.localId = ''
        },
        setClearAddress: (state) => {
            state.address.street = ''
            state.address.latitude = ''
            state.address.longitude = ''
        },
        setClearUserData: (state) => {
            state.userData.name = ''
            state.userData.email = ''
            state.userData.phone = ''
        },
    },
})

export const {
    setIdToken,
    setAddress,
    setUserData,
    setClearIdToken,
    setClearUserData,
} = idTokenSlice.actions

export default idTokenSlice.reducer
