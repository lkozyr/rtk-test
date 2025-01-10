import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const dataApi = createApi({
  reducerPath: 'dataApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getAlbum: builder.query({
       query: (id) => `albums/${id}`,
    }),
    getAlbumPhotos: builder.query({
      query: (id) => `albums/${id}/photos`,
   }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAlbumQuery, useGetAlbumPhotosQuery } = dataApi