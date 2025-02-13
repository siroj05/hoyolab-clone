import { configureStore } from '@reduxjs/toolkit';
import isPopupOpenReducer from '../features/popup/popupSlice'
import authReducer from '../features/auth/authSlice'
import { AuthUser } from '@/features/auth/authApi';
import { PostsApi } from '@/features/posts/postsApi';
// import { CommentApi } from '@/features/comments/commentsApi';
import postActionReducer from '@/features/posts/postSlice'

const store = configureStore({
  reducer: {
    isPopupOpen : isPopupOpenReducer,
    currentUser : authReducer,
    // reducer api
    postAction : postActionReducer,
    [AuthUser.reducerPath] : AuthUser.reducer,
    [PostsApi.reducerPath] : PostsApi.reducer,
    // [CommentApi.reducerPath] : CommentApi.reducer
  },

  // middleware api
  middleware : getDefaultMiddleware => 
    getDefaultMiddleware()
    .concat([
      AuthUser.middleware,
      PostsApi.middleware,
      // CommentApi.middleware
    ])
});
export const { resetApiState } = AuthUser.util
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; // Menambahkan tipe untuk dispatch

export default store;
