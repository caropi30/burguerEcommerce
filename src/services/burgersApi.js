import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://burgerecommerce-default-rtdb.firebaseio.com/';

export const burgersApi = createApi({
    reducerPath: 'burgersApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
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
    }),
});

export const { useGetCategoriesQuery, useGetIndividualProductsQuery, useGetComboProductsQuery } = burgersApi;