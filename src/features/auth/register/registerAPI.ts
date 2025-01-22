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
      await axios.post(
        `${baseUrl}/api/register`,
        request,
        config
      )
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Unknown error');
    }
  }
)