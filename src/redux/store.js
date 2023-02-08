import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
import postsReducer from './postsRedux';
import categoriesReducer from './catRedux';

const subreducers = {
    posts: postsReducer,
    categories: categoriesReducer
};

export const getAllPosts = (state) => state.posts;
export const getPostById = ({ posts }, postId) => posts.find(post => post.id === postId);

const reducer = combineReducers(subreducers);
const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;