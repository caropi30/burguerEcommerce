import { createSlice } from '@reduxjs/toolkit';
import data from '../constants/data';

export const productTypeSlice = createSlice({
    name: 'productType',
    initialState: data,
    reducers: {
        setProductType: (state) => state.filter((item) => item.productType),
    },
});

export const { setProductType } = productTypeSlice.actions;

export default productTypeSlice.reducer;
