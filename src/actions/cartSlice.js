import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    quantity: 0,
    total: 0,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setItems: (state, action) => {
            //state.items.push(action.payload);
            state.items = [...state.items, action.payload];
        },
        setAddQuentityProduct: (state, action) => {
            state.items.map((item) => {
                if (item.id === action.payload.id) {
                    item.quantity += 1;
                    item.price += item.price;
                }
            });
        },
        setSubstractQuantityProduct: (state, action) => {
            state.items.map((item) => {
                if (item.id === action.payload.id) {
                    item.quantity -= 1;
                    item.price -= item.price;
                }
            });
        },
        setRemoveProduct: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload.id);
        },
        setTotal: (state) => {
            state.total = state.items.reduce((acc, item) => acc + item.price, 0);
        },
    },
});

export const { setItems, setAddQuentityProduct, setSubstractQuantityProduct, setRemoveProduct, setTotal } = cartSlice.actions;

export default cartSlice.reducer;