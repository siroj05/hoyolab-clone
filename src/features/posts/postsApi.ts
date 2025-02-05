import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from "../auth/authApi";
import { setPost } from './postSlice';

export interface Post {
  _id?: string
  cover : string
  title: string
  content: string
  userId : string
  createdAt? : string
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

    updatePost : builder.mutation({
      query : ({body, currentUserId}) => ({
        url : `updatePost/${currentUserId}`,
        method : 'PUT',
        body
      }),
      invalidatesTags: ['Post']
    }),
    // get detail post
    getDetailPost : builder.query<Post, any>({
      query : (postId) => ({
        url : `detailPost/${postId}`,
        method : 'GET'
      }),
      // async onQueryStarted(_, {dispatch, queryFulfilled}) {
      //   try {
      //     const {data} = await queryFulfilled
      //     dispatch(setPost(data))
      //   } catch (error) {
      //     console.error('Failed to fetch', error)
      //   }
      // }
    }),


    // delete post
    deletedPost : builder.mutation({
      query : (postId) => ({
        url : `deletePost/${postId}`,
        method : 'DELETE'
      }),
      invalidatesTags : ['Post']
    }),

    // get all post by user id
    getPostByUserId : builder.query<Post[], string>({
      query: (userId) => ({
        url : `post/${userId}`,
        method : 'GET'
      }),
      providesTags: ['Post']
    }),

    // get all post
    posts: builder.query<Post[], void>({
      query: () => `posts`,
      providesTags : ['Post']
    }),

    // create post
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
  useUpdatePostMutation,
  useGetDetailPostQuery,
  useDeletedPostMutation,
  useGetPostByUserIdQuery,
  usePostsQuery, 
  useNewArticeMutation 
} = PostsApi;
