import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../actions/counterSlice';
import productTypeSlice from '../actions/productTypeSlice';
import titleSlice from '../actions/titleSlice';
import subcategoriesSlice from '../actions/subcategoriesSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import productInfoSlice from '../actions/productInfoSlice';
import { burgersApi } from '../services/burgersApi';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        productType: productTypeSlice,
        productInfo: productInfoSlice,
        title: titleSlice,
        [burgersApi.reducerPath]: burgersApi.reducer,
        subcategories: subcategoriesSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(burgersApi.middleware),
});

setupListeners(store.dispatch);
export default store;
