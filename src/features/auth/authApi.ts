import { createApi, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query/react'

// next bikin env
export const baseUrl = import.meta.env.VITE_API_URL

interface User {
  email : string,
  password : string
}

interface Errors {
  error : {status : number | string}
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
      providesTags: ['Users'],
      async onQueryStarted(_, {queryFulfilled}){
        try {
          const { data } = await queryFulfilled
          localStorage.setItem('auth', JSON.stringify(data.user))
          window.dispatchEvent(new Event("storage"));
        } catch (error) {
          // console.error('Failed to fetch', error)
          if((error as Errors).error.status === 401){
            localStorage.removeItem('auth')
            window.dispatchEvent(new Event("storage"));
          }
        }
      }
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

    logout : builder.mutation<void, void>({
      query: () => ({
        url: `logout`,
        method : 'POST',
      }),
      invalidatesTags: ['Users']
    })
    
  })
})

export const {
  useLoginMutation, 
  useRegisterMutation,
  useLogoutMutation,
  useProfileQuery
} = AuthUser