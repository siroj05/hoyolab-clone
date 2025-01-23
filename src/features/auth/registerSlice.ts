import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { registerUser } from "./register/registerAPI";

interface AuthState {
  loading : boolean
  userInfo : {id : string, name : string}
  userToken : string | null
  error : string | null
  success : boolean
  message : string | null
}

const initialState : AuthState = {
  loading : false,
  userInfo : {id : '', name : ''},
  userToken : null,
  error : null,
  success : false,
  message : ''
}

const authSlice = createSlice({
  name : 'auth',
  initialState,
  reducers: {
    reset: () => initialState
  },
  extraReducers: (builder) =>{
    builder
      .addCase(registerUser.pending, (state) =>{
        state.loading = true
      })
      .addCase(registerUser.fulfilled, (state, action)=>{
        state.loading = false,
        state.success = true
        state.message = action.payload
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string || "Registration failed";
      });
  }
})
export const {reset} = authSlice.actions
export default authSlice.reducer