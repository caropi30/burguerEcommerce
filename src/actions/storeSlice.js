import { createSlice } from '@reduxjs/toolkit'
import data from '../constants/data'

export const storeSlice = createSlice({
    name: 'mystore',
    initialState: data,
    reducers: {},
})

// Action creators are generated for each case reducer function
// export const {} = counterSlice.actions;

export default storeSlice.reducer
