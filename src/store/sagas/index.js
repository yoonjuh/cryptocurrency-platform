import {all} from 'redux-saga/effects';
import dashboard from './dashboard';
import price from './price';
import ath from './ath';
import marketCap from './marketCap';

export default function* rootSaga() {
  yield all([...dashboard, ...price, ...ath, ...marketCap]);
}
