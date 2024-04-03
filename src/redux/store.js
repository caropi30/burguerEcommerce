import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import counterReducer from '../actions/counterSlice'
import productTypeSlice from '../actions/productTypeSlice'
import titleSlice from '../actions/titleSlice'
import subcategoriesSlice from '../actions/subcategoriesSlice'
import productInfoSlice from '../actions/productInfoSlice'
import { burgersApi } from '../services/burgersApi'
import { authApi } from '../services/authApi'

const store = configureStore({
    reducer: {
        counter: counterReducer,
        productType: productTypeSlice,
        productInfo: productInfoSlice,
        title: titleSlice,
        [burgersApi.reducerPath]: burgersApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        subcategories: subcategoriesSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            burgersApi.middleware,
            authApi.middleware
        ),
})

setupListeners(store.dispatch)
export default store
