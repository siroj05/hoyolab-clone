import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Post } from "./postsApi"

const initialState : Post = {
  _id: "",
  cover : "",
  title: "",
  content: "",
  userId : "",
  createdAt : "",
  userInfo : {
    email : "",
    firstName : "",
    _id : ""
  }
}

const postActionSlice = createSlice({
  name : "detailPost",
  initialState,
  reducers: {
    setPost : (state, action : PayloadAction<Post>) =>{
      return {...state, ...action.payload}
    },
    clearPost : () => initialState
  }
})

export const { setPost, clearPost } = postActionSlice.actions
export default postActionSlice.reducer