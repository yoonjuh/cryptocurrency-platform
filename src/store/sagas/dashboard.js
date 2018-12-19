import {call, put, takeEvery} from 'redux-saga/effects';
import {GET_DASHBOARD_DATA, GET_DASHBOARD_DATA_SUCCESS} from '../constants';
import {getDashboard, getPrice, getATH} from '../../utils/api';
import {athConcater, arrayConcater} from '../../utils/helpers';

function* getDashboardData() {
  console.log('action wired up');
  const dash = yield call(getDashboard);
  const pri = yield call(getPrice);
  const ath = yield call(getATH);
  const data = athConcater(arrayConcater(dash, pri), ath);
  console.log(`from sagas, ${JSON.stringify(data)}`);
  yield put({
    type: GET_DASHBOARD_DATA_SUCCESS,
    data,
  });
}

const dashboardSaga = [takeEvery(GET_DASHBOARD_DATA, getDashboardData)];

export default dashboardSaga;
