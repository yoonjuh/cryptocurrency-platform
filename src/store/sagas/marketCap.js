import {call, put, takeEvery} from 'redux-saga/effects';
import {
  GET_TOTAL_MARKET_CAP_DAY,
  GET_TOTAL_MARKET_CAP_DAY_SUCCESS,
} from '../constants';
import {getMarketCap} from '../../utils/api';
import {athConcater, arrayConcater} from '../../utils/helpers';

function* getTotalMarketCap({start}) {
  const marketCap = yield call(getMarketCap, start);

  console.log(marketCap);
  try {
    yield put({
      type: GET_TOTAL_MARKET_CAP_DAY_SUCCESS,
      data: marketCap,
    });
  } catch (err) {
    console.log(err);
  }
}

const marketCapSaga = [takeEvery(GET_TOTAL_MARKET_CAP_DAY, getTotalMarketCap)];

export default marketCapSaga;
