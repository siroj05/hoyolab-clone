import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setCredential } from './authSlice'

// next bikin env
const baseUrl = 'http://localhost:3000/api/'

interface User {
  email : string,
  password : string
}

export const AuthUser = createApi({
  reducerPath : 'AuthUser',
  baseQuery : fetchBaseQuery({
    baseUrl : baseUrl,
    credentials : "include",
  }),
  tagTypes: ['Users'],
  endpoints : (builder) => ({

    profile : builder.query<any, any>({
      query:() => `profile`,
      providesTags: ['Users']
    }),

    register : builder.mutation<User, User>({
      query: (body) =>({
        url: `register`,
        method : 'POST',
        body
      })
    }),

    login : builder.mutation<User, User>({
      query: (body) => ({
        url: `login`,
        method : 'POST',
        body
      }),
      invalidatesTags: ['Users']
    }),

    
  })
})

export const {
  useLoginMutation, 
  useRegisterMutation,
  useProfileQuery
} = AuthUser