import { configureStore } from '@reduxjs/toolkit';
import postReducer from '../features/newArticle/postSlice';
import getPostsReducer from '../features/posts/getPostsSlice'
import isPopupOpenReducer from '../features/popup/popupSlice'
import authReducer  from '../features/auth/registerSlice'

const store = configureStore({
  reducer: {
    auth : authReducer,
    posts: postReducer,
    getPosts : getPostsReducer,
    isPopupOpen : isPopupOpenReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; // Menambahkan tipe untuk dispatch

export default store;
