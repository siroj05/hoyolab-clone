import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from "../auth/authApi";

export interface Post {
  _id?: string
  cover : string
  title: string
  content: string
  userId : string
  userInfo? : {
    email : string,
    firstName : string
    _id : string
  }
}

export const GetPostsApi = createApi({
  reducerPath: "post",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes : ['Post'],
  endpoints: (builder) => ({
    posts: builder.query<Post[], void>({
      query: () => `posts`,
      providesTags : ['Post']
    }),

    newArtice : builder.mutation<Post, Post>({
      query: (body) => ({
        url : `createPost`,
        method: 'POST',
        body
      }),
      invalidatesTags: ['Post']
    })
  }),
});

export const { usePostsQuery, useNewArticeMutation } = GetPostsApi;
