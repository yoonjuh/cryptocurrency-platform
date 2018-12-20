import {GET_TOTAL_MARKET_CAP_DAY_SUCCESS} from '../constants';

const marketCapReducer = (state = [], action) => {
  switch (action.type) {
    case GET_TOTAL_MARKET_CAP_DAY_SUCCESS: {
      console.log(action.data);
      return action.data;
    }
    default:
      return state;
  }
};

export default marketCapReducer;
