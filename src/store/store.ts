import { configureStore } from '@reduxjs/toolkit';
import postReducer from '../features/newArticle/postSlice';
import isPopupOpenReducer from '../features/popup/popupSlice'
import authReducer from '../features/auth/authSlice'
import { AuthUser } from '@/features/auth/authApi';
import { GetPostsApi } from '@/features/posts/getPostsApi';

const store = configureStore({
  reducer: {
    posts: postReducer,
    isPopupOpen : isPopupOpenReducer,
    currentUser : authReducer,
    // reducer api
    [AuthUser.reducerPath] : AuthUser.reducer,
    [GetPostsApi.reducerPath] : GetPostsApi.reducer
  },

  // middleware api
  middleware : getDefaultMiddleware => 
    getDefaultMiddleware()
    .concat(AuthUser.middleware)
    .concat(GetPostsApi.middleware)
});
export const { resetApiState } = AuthUser.util
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; // Menambahkan tipe untuk dispatch

export default store;
