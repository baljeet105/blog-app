import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';
import history from '../history';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value();
};

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: response.data });
};

export const fetchUsers = () => async dispatch => {
  const response = await jsonPlaceholder.get('/users');

  dispatch({ type: 'FETCH_USERS', payload: response.data });
};

export const createPost = formValues => async dispatch => {
  jsonPlaceholder.post('/posts', formValues)
  .then(response => {
	console.log(response);
  history.push('/');
})
.catch(error => {
    console.log(error.response)
});

};

export const deletePost = id => async dispatch => {
  await jsonPlaceholder.delete(`/posts/${id}`);

  dispatch({ type: 'DELETE_POST', payload: id });
  window.location.reload();
};
