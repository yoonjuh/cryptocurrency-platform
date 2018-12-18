import {GET_ALL_PRICE_SUCCESS} from '../constants/price';

const priceReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_PRICE_SUCCESS: {
      return action.price;
    }
    default:
      return state;
  }
};

export default priceReducer;
