import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface Post {
  cover: string;
  title: string;
  content: string;
  userId: string;
}

interface PostState {
  posts: Post[];
  loading: boolean;
  error: string | null;
}

export const getPosts = createAsyncThunk('api/getPosts', async () => {
  try {
    const response = await fetch('http://localhost:3000/api/posts', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error('Something went wrong');
    }

    return await response.json();
  } catch (error) {
    throw new Error(error as string);
  }
});

const getPostsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    loading: false,
    error: null,
  } as PostState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
        state.loading = false;
        state.posts = action.payload; // Ganti seluruh array `posts` dengan payload baru
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Unknown error';
      });
  },
});

export default getPostsSlice.reducer;
