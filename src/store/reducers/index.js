import {combineReducers} from 'redux';
import currencyReducer from './currencies';
import dashboardReducer from './dashboard';
import priceReducer from './price';
import sortByReducer from './sortBy';
import athReducer from './ath';

export default combineReducers({
  currency: currencyReducer,
  dashboard: dashboardReducer,
  price: priceReducer,
  sortBy: sortByReducer,
  ath: athReducer,
});
