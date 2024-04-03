import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import services from '../constants/services'

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: services.AUTH_URL }),
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (user) => ({
                url: services.AUTH_TOKEN,
                method: 'POST',
                body: user,
            }),
        }),
    }),
})

export const { useRegisterMutation } = authApi
