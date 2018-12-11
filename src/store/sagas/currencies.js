import {call, put, takeEvery} from 'redux-saga/effects';
import {GET_ALL_CURRENCIES} from '../constants';
import {getAllCurrencies} from '../../utils/api';

function* getAllCurrenciesSaga() {
  console.log('action wired up');
  const currencies = yield call(getAllCurrencies);
}

const currenciesSaga = [takeEvery(GET_ALL_CURRENCIES, getAllCurrenciesSaga)];

export default currenciesSaga;
