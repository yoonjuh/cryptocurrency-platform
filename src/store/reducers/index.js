import {combineReducers} from 'redux';
import dashboardReducer from './dashboard';
import priceReducer from './price';
import sortByReducer from './sortBy';
import athReducer from './ath';
import marketCapReducer from './marketCap';

export default combineReducers({
  dashboard: dashboardReducer,
  price: priceReducer,
  sortBy: sortByReducer,
  ath: athReducer,
  marketCap: marketCapReducer,
});
