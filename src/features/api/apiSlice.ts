import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/' }),
  endpoints: (builder) => ({
    getProfilesByName: builder.query({
      query: (name) => `users?q=${name}`,
    }),
  }),
})

export const { useGetProfilesByNameQuery } = apiSlice
