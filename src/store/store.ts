import { configureStore } from '@reduxjs/toolkit';
import postReducer from '../pages/NewArticle/postSlice';
import getPostsReducer from '../pages/Home/getPostsSlice'
import isPopupOpenReducer from '../components/popup/popupSlice'

const store = configureStore({
  reducer: {
    posts: postReducer,
    getPosts : getPostsReducer,
    isPopupOpen : isPopupOpenReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; // Menambahkan tipe untuk dispatch

export default store;
