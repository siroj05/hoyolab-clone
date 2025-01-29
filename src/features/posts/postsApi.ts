import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from "../auth/authApi";

export interface Post {
  _id?: string
  cover : string
  title: string
  content: string
  userId : string
  createAt : string
  time : string
  userInfo? : {
    email : string,
    firstName : string
    _id : string
  }
}

export const PostsApi = createApi({
  reducerPath: "post",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes : ['Post'],
  endpoints: (builder) => ({

    deletedPost : builder.mutation({
      query : (postId) => ({
        url : `deletePost/${postId}`,
        method : 'DELETE'
      }),
      invalidatesTags : ['Post']
    }),

    getPostByUserId : builder.query<Post[], string>({
      query: (userId) => ({
        url : `post/${userId}`,
        method : 'GET'
      }),
      providesTags: ['Post']
    }),

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

export const { 
  useDeletedPostMutation,
  useGetPostByUserIdQuery,
  usePostsQuery, 
  useNewArticeMutation 
} = PostsApi;
