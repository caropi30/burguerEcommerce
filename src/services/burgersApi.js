import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import services from '../constants/services'

export const burgersApi = createApi({
    reducerPath: 'burgersApi',
    baseQuery: fetchBaseQuery({ baseUrl: services.BASE_URL }),
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => 'categories.json',
        }),
        getIndividualProducts: builder.query({
            query: () => `individualProducts.json`,
        }),
        getComboProducts: builder.query({
            query: () => `comboProducts.json`,
        }),
        setUser: builder.mutation({
            query: (user) => ({
                url: `users.json`,
                method: 'POST',
                body: user,
            }),
        }),
        getUser: builder.query({
            query: (user) => `users.json`,
        }),
    }),
})

export const {
    useGetCategoriesQuery,
    useGetIndividualProductsQuery,
    useGetComboProductsQuery,
    useGetUserQuery,
    useSetUserMutation,
} = burgersApi
