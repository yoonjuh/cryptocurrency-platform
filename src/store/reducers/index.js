import {combineReducers} from 'redux';
import currencyReducer from './currencies';
import dashboardReducer from './dashboard';
import priceReducer from './price';
import sortByReducer from './sortBy';

export default combineReducers({
  currency: currencyReducer,
  dashboard: dashboardReducer,
  price: priceReducer,
  sortBy: sortByReducer,
});
