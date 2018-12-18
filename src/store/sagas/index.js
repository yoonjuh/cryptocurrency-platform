import {all} from 'redux-saga/effects';
import currencies from './currencies';
import dashboard from './dashboard';
import price from './price';

export default function* rootSaga() {
  yield all([...currencies, ...dashboard, ...price]);
}
