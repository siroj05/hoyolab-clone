import { configureStore } from '@reduxjs/toolkit';
import isPopupOpenReducer from '../features/popup/popupSlice'
import authReducer from '../features/auth/authSlice'
import { AuthUser } from '@/features/auth/authApi';
import { PostsApi } from '@/features/posts/postsApi';

const store = configureStore({
  reducer: {
    isPopupOpen : isPopupOpenReducer,
    currentUser : authReducer,
    // reducer api
    [AuthUser.reducerPath] : AuthUser.reducer,
    [PostsApi.reducerPath] : PostsApi.reducer
  },

  // middleware api
  middleware : getDefaultMiddleware => 
    getDefaultMiddleware()
    .concat(AuthUser.middleware)
    .concat(PostsApi.middleware)
});
export const { resetApiState } = AuthUser.util
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; // Menambahkan tipe untuk dispatch

export default store;
