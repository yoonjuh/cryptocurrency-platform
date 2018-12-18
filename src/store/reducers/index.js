import {combineReducers} from 'redux';
import currencyReducer from './currencies';
import dashboardReducer from './dashboard';
import priceReducer from './price';

export default combineReducers({
  currency: currencyReducer,
  dashboard: dashboardReducer,
  price: priceReducer,
});
