import {takeEvery, call, put} from 'redux-saga/effects';
import {GET_ALL_PRICE, GET_ALL_PRICE_SUCCESS} from '../constants/price';
import {getPrice} from '../../utils/api';

function* getAllPrice() {
  const price = yield call(getPrice);

  yield put({
    type: GET_ALL_PRICE_SUCCESS,
    price,
  });
}

const priceSaga = [takeEvery(GET_ALL_PRICE, getAllPrice)];

export default priceSaga;
