import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    title: '',
    id: '',
    icon: '',
}

export const productInfoSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProductInfo: (state, action) => {
            const { title, id, icon } = action.payload
            return {
                ...state,
                title,
                id,
                icon,
            }
        },
    },
})

export const { setProductInfo } = productInfoSlice.actions

export default productInfoSlice.reducer
