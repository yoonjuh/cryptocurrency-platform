import {all} from 'redux-saga/effects';
import dashboard from './dashboard';
import price from './price';

export default function* rootSaga() {
  yield all([...dashboard, ...price]);
}
