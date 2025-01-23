import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

// next bikin env
const baseUrl = 'http://localhost:3000/api/'

interface User {
  email : string,
  password : string
}

export const registerUser = createAsyncThunk(
  'auth/register',
  async (request: User, {rejectWithValue}) =>{
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const {data} = await axios.post(
        `${baseUrl}/register`,
        request,
        config
      )
      return data
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : 'Unknown error'
      );
    }
  }
)