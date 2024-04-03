import { createSlice } from '@reduxjs/toolkit'

export const subcategoriesSlice = createSlice({
    name: 'subcategories',
    initialState: [],
    reducers: {
        setSubcategories: (state, action) => {
            const newData = action.payload.map((item) => ({ ...item }))
            return [...newData]
        },
    },
})

export const { setSubcategories } = subcategoriesSlice.actions

export default subcategoriesSlice.reducer
