import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    title: '',
    id: '',
    icon: '',
    radioValue: '',
    selectedBoxes: [],
    secondarySelectedBoxes: [],
    price: '',
}

export const productDataSlice = createSlice({
    name: 'productData',
    initialState,
    reducers: {
        setProductData: (state, action) => {
            const {
                title,
                id,
                icon,
                radioValue,
                selectedBoxes,
                secondarySelectedBoxes,
                price,
            } = action.payload
            return {
                ...state,
                title,
                id,
                icon,
                radioValue,
                selectedBoxes,
                secondarySelectedBoxes,
                price,
            }
        },
    },
})

export const { setProductData } = productDataSlice.actions

export default productDataSlice.reducer
