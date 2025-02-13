import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../auth/authApi";

export interface Comment {
  postId : string
  userId : string
  comment : string
}

// export const CommentApi = createApi({
//   reducerPath : "comment",
//   baseQuery : fetchBaseQuery({baseUrl}),
//   tagTypes : ['Post'],
//   endpoints : (builder) => ({
//     createComment : builder.mutation<Comment, any>({
//       query: (body) => ({
//         url : `comment`,
//         method : 'POST',
//         body
//       }),
//       invalidatesTags: (result, error, { postId }) => [{ type: 'Post', id: postId }]
//     })
//   })
// })

// export const {
//   useCreateCommentMutation
// } = CommentApi