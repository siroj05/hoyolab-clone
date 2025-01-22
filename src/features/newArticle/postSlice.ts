import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

// Definisikan tipe untuk post data dan state
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

// API call untuk mengirim data
export const createPost = createAsyncThunk('api/createPost',
  async (postData: Post, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:3000/api/createPost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });
      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      return await response.json();
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Unknown error');
    }
  }
);

// Slice Redux
const postSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    loading: false,
    error: null,
  } as PostState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createPost.pending, (state) => {
        state.loading = true;
      })
      .addCase(createPost.fulfilled, (state, action: PayloadAction<Post>) => {
        state.loading = false;
        state.posts.push(action.payload); // Menambah post baru ke dalam array
      })
      .addCase(createPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string; // Menyimpan pesan error
      });
  },
});

export default postSlice.reducer;
