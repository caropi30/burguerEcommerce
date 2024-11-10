import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import services from '../constants/services'

export const usersApi = createApi({
    reducerPath: 'burgersApi',
    baseQuery: fetchBaseQuery({ baseUrl: services.BASE_URL }),
    endpoints: (builder) => ({
        setUser: builder.mutation({
            query: (user) => ({
                url: `users.json`,
                method: 'POST',
                body: user,
            }),
        }),
    }),
})

export const { useSetUserMutation } = usersApi
