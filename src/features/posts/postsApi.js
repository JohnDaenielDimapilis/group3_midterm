import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => 'posts',
      // Cache the collection and each item so detail lookups stay consistent.
      providesTags: (result = []) => [
        'Post',
        ...result.map(({ id }) => ({ type: 'Post', id })),
      ],
    }),
    getPostById: builder.query({
      query: (id) => `posts/${id}`,
      providesTags: (_, __, id) => [{ type: 'Post', id }],
    }),
  }),
})

export const { useGetPostsQuery, useGetPostByIdQuery } = postsApi
