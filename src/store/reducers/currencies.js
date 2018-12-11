import {GET_ALL_CURRENCIES_SUCCESS} from '../constants';

const currencyReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_CURRENCIES_SUCCESS: {
      const {currencies} = action;
      return {...state, currencies};
    }
    default:
      return state;
  }
};

export default currencyReducer;
