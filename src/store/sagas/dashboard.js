import {call, put, takeEvery} from 'redux-saga/effects';
import {GET_DASHBOARD_DATA, GET_DASHBOARD_DATA_SUCCESS} from '../constants';
import {getDashboard} from '../../utils/api';

function* getDashboardData() {
  console.log('action wired up');
  const data = yield call(getDashboard);
  yield put({
    type: GET_DASHBOARD_DATA_SUCCESS,
    data,
  });
}

const dashboardSaga = [takeEvery(GET_DASHBOARD_DATA, getDashboardData)];

export default dashboardSaga;
