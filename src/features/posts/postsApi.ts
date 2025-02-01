import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseUrl } from "../auth/authApi";
import { setPost } from './postSlice';

export interface Post {
  _id?: string
  cover : string
  title: string
  content: string
  userId : string
  createdAt : string
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

    getDetailPost : builder.query<Post, any>({
      query : ({postId, userId}) => ({
        url : `detailPost/${postId}/${userId}`,
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
  useGetDetailPostQuery,
  useDeletedPostMutation,
  useGetPostByUserIdQuery,
  usePostsQuery, 
  useNewArticeMutation 
} = PostsApi;
