import {call, put, takeEvery} from 'redux-saga/effects';
import {
  GET_TOTAL_MARKET_CAP_DAY,
  GET_TOTAL_MARKET_CAP_DAY_SUCCESS,
  GET_TOTAL_MARKET_CAP_WEEK,
  GET_TOTAL_MARKET_CAP_WEEK_SUCCESS,
  GET_TOTAL_MARKET_CAP_MONTH,
  GET_TOTAL_MARKET_CAP_MONTH_SUCCESS,
  GET_TOTAL_MARKET_CAP_YEAR,
  GET_TOTAL_MARKET_CAP_YEAR_SUCCESS,
} from '../constants';
import {getMarketCap} from '../../utils/api';

function* getTotalMarketCapDay({start}) {
  const dayCap = yield call(getMarketCap, start);

  try {
    yield put({
      type: GET_TOTAL_MARKET_CAP_DAY_SUCCESS,
      data: dayCap,
    });
  } catch (err) {
    console.log(err);
  }
}

function* getTotalMarketCapWeek({start}) {
  const weekCap = yield call(getMarketCap, start);

  try {
    yield put({
      type: GET_TOTAL_MARKET_CAP_WEEK_SUCCESS,
      data: weekCap,
    });
  } catch (err) {
    console.log(err);
  }
}

function* getTotalMarketCapMonth({start}) {
  const monthCap = yield call(getMarketCap, start);

  try {
    yield put({
      type: GET_TOTAL_MARKET_CAP_MONTH_SUCCESS,
      data: monthCap,
    });
  } catch (err) {
    console.log(err);
  }
}

function* getTotalMarketCapYear({start}) {
  const yearCap = yield call(getMarketCap, start);

  try {
    yield put({
      type: GET_TOTAL_MARKET_CAP_YEAR_SUCCESS,
      data: yearCap,
    });
  } catch (err) {
    console.log(err);
  }
}

const marketCapSaga = [
  takeEvery(GET_TOTAL_MARKET_CAP_DAY, getTotalMarketCapDay),
  takeEvery(GET_TOTAL_MARKET_CAP_WEEK, getTotalMarketCapWeek),
  takeEvery(GET_TOTAL_MARKET_CAP_MONTH, getTotalMarketCapMonth),
  takeEvery(GET_TOTAL_MARKET_CAP_YEAR, getTotalMarketCapYear),
];

export default marketCapSaga;
