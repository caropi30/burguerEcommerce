import { configureStore } from '@reduxjs/toolkit';
import subcategoriesSlice from '../actions/subcategoriesSlice';
import productInfoSlice from '../actions/productInfoSlice';
import idTokenSlice from '../actions/idTokenSlice';
import cartSlice from '../actions/cartSlice';
import productDataSlice from '../actions/productDataSlice';
import userSlice from '../actions/userSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { burgersApi } from '../services/burgersApi';
import { authApi } from '../services/authApi';


const store = configureStore({
    reducer: {
        productInfo: productInfoSlice,
        idToken: idTokenSlice,
        subcategories: subcategoriesSlice,
        cart: cartSlice,
        productData: productDataSlice,
        user: userSlice,
        [burgersApi.reducerPath]: burgersApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(burgersApi.middleware, authApi.middleware),
});

setupListeners(store.dispatch);
export default store;
