import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  posts: postsReducer,
  users: usersReducer,
  form: formReducer
});
