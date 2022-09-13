import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProfile, ServerResponse } from '../../types/types'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/' }),
  endpoints: (builder) => ({
    getProfilesByName: builder.query<IProfile[], string>({
      query: (name) => `search/users?q=${name}`,
      transformResponse: (rawResult: ServerResponse<IProfile>) => {
        return rawResult.items
      },
    }),
  }),
})

export const { useGetProfilesByNameQuery } = apiSlice
