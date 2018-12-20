import {
  GET_TOTAL_MARKET_CAP_DAY_SUCCESS,
  GET_TOTAL_MARKET_CAP_WEEK_SUCCESS,
  GET_TOTAL_MARKET_CAP_MONTH_SUCCESS,
  GET_TOTAL_MARKET_CAP_YEAR_SUCCESS,
} from '../constants';

const marketCapReducer = (state = [], action) => {
  switch (action.type) {
    case GET_TOTAL_MARKET_CAP_DAY_SUCCESS: {
      console.log(action.data);
      return action.data;
    }

    case GET_TOTAL_MARKET_CAP_WEEK_SUCCESS: {
      console.log(action.data);
      return action.data;
    }

    case GET_TOTAL_MARKET_CAP_MONTH_SUCCESS: {
      console.log(action.data);
      return action.data;
    }

    case GET_TOTAL_MARKET_CAP_YEAR_SUCCESS: {
      console.log(action.data);
      return action.data;
    }
    default:
      return state;
  }
};

export default marketCapReducer;
