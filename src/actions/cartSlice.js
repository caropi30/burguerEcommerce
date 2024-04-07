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
            state.items = [...state.items, action.payload];
        },
        setAddItem: (state, action) => {
            state.items.map((item) => {
                if (item.id === action.payload.id) {
                    item.quantity += 1;
                    item.price += item.price;
                }
            });
        },
        setSubstractItem: (state, action) => {
            state.items.forEach((item) => {
                if (item.id === action.payload.id) {
                    item.quantity -= 1;
                    item.price;
                }
            });
        },
        setRemoveProduct: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload.id);
        },
        setTotal: (state) => {
            const newState = state.items.map(item => state.items.length === 1 ? item.price : item.price + item.price);
            state.total = newState[0];
        },
        setClearCart: (state) => {
            state.items = [];
            state.total = 0;
        },
    },
});

export const { setItems, setAddItem, setSubstractItem, setRemoveProduct, setTotal, setClearCart } = cartSlice.actions;

export default cartSlice.reducer;