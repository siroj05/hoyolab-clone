import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface currentUser {
  id : string | null,
  firstName : string | null,
  email : string | null
  isLogin : boolean
}

const initialState : currentUser = {
  id : null,
  firstName : null,
  email : null, 
  isLogin : false
}

const authSlice = createSlice({
  name : 'userInfo',
  initialState,
  reducers: {
    setCredential: (state, action : PayloadAction<{id : string, firstName : string, email : string }>) =>{
      const { email, firstName, id } = action.payload
      state.email = email
      state.firstName = firstName
      state.id = id
      state.isLogin = true
    },

    resetCredential : (state) => {
      state.email = initialState.email
      state.firstName = initialState.firstName
      state.id = initialState.id
      state.isLogin = false
    }
  }
})

export const {setCredential, resetCredential} = authSlice.actions
export default authSlice.reducer