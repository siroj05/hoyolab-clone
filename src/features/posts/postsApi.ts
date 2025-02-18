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
  userInfo? : UserInfo
  comments? : Comments[]
}

export interface Comments {
  comment : string
  createdAt : string
  postId : string
  userId : string
  userInfo : UserInfo
}

export interface UserInfo {
  email : string,
  firstName : string
  _id : string
}

export const PostsApi = createApi({
  reducerPath: "post",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes : ['Post'],
  endpoints: (builder) => ({

    // comment
    // note : ini sementara 
    createComment : builder.mutation<Comment, any>({
      query: (body) => ({
        url : `comment`,
        method : 'POST',
        body
      }),
      invalidatesTags: (result, error, { postId }) => [{ type: 'Post', id: postId }]
    }),

    // ============================
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
      providesTags: (result, error, postId) => [{ type: 'Post', id: postId }],
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
    posts: builder.query<Post[], any>({
      query: (search) => ({
        url : `/posts`,
        params : search ? {search} : undefined
      }),
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
  useCreateCommentMutation,
  useUpdatePostMutation,
  useGetDetailPostQuery,
  useDeletedPostMutation,
  useGetPostByUserIdQuery,
  usePostsQuery, 
  useNewArticeMutation 
} = PostsApi;
