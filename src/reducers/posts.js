import { FETCH_DATA, POST_COMMENT } from 'consts';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload;
    case POST_COMMENT:
      return action.payload;
    default:
      return state;
  }
};