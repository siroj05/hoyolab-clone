import { configureStore } from '@reduxjs/toolkit';
import postReducer from '../features/newArticle/postSlice';
import getPostsReducer from '../features/posts/getPostsSlice'
import isPopupOpenReducer from '../features/popup/popupSlice'
import authReducer from '../features/auth/authSlice'
import { AuthUser } from '@/features/auth/authApi';

const store = configureStore({
  reducer: {
    posts: postReducer,
    getPosts : getPostsReducer,
    isPopupOpen : isPopupOpenReducer,
    currentUser : authReducer,
    // reducer api
    [AuthUser.reducerPath] : AuthUser.reducer
  },

  // middleware api
  middleware : getDefaultMiddleware => 
    getDefaultMiddleware().concat(AuthUser.middleware)
});
export const { resetApiState } = AuthUser.util
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; // Menambahkan tipe untuk dispatch

export default store;
