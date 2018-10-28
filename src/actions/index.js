import axios from 'axios';
export const getUser = username => dispatch => {
  dispatch({
    type: 'USER_LOADING'
  });
  axios.get(`https://api.github.com/users/${username}`)
    .then(res => {
      dispatch({
        type: 'GET_USER',
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: 'GET_ERRORS',
        payload: err.response.data
      })
    });
}

export const clearUser = username => dispatch => {
  dispatch({
    type: 'CLEAR_USER',
  });
}
