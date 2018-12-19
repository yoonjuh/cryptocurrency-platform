import {GET_ALL_TIME_HIGH_SUCCESS} from '../constants';

const athReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_TIME_HIGH_SUCCESS: {
      return action.data;
    }
    default:
      return state;
  }
};

export default athReducer;
