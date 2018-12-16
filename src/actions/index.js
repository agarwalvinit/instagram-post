import axios from 'axios';
import { FETCH_DATA, POST_COMMENT } from 'consts';
const { REACT_APP_API_BASE_URL } = process.env;

/*
 * action creators
 */

export const fetchData = () => async (dispatch) => {
  const { data } = await axios.get(`${REACT_APP_API_BASE_URL}/bins/rka9g`);
  dispatch({ 
    type: FETCH_DATA,
    payload: data,
  });
}

// export const saveComment = () => {
//   dispatch({ 
//     type: FETCH_DATA,
//     payload: data,
//   });
// }

export const postData = (data) => {
  return { type: POST_COMMENT, payload: data }
}
