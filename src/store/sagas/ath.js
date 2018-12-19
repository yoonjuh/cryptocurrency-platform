import {call, put, takeEvery} from 'redux-saga/effects';
import {GET_ALL_TIME_HIGH, GET_ALL_TIME_HIGH_SUCCESS} from '../constants';
import {getATH} from '../../utils/api';

function* getAllTimeHigh() {
  const data = yield call(getATH);

  yield put({
    type: GET_ALL_TIME_HIGH_SUCCESS,
    data,
  });
}

const athSaga = [takeEvery(GET_ALL_TIME_HIGH, getAllTimeHigh)];

export default athSaga;
