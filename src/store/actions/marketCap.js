import moment from 'moment';
import {
  GET_TOTAL_MARKET_CAP_DAY,
  GET_TOTAL_MARKET_CAP_WEEK,
  GET_TOTAL_MARKET_CAP_MONTH,
  GET_TOTAL_MARKET_CAP_YEAR,
} from '../constants';

export const getMarketCapDay = () => ({
  type: GET_TOTAL_MARKET_CAP_DAY,
  start: moment()
    .subtract(2, 'hours')
    .toISOString(),
});

export const getMarketCapWeek = () => ({
  type: GET_TOTAL_MARKET_CAP_WEEK,
  start: moment()
    .subtract(7, 'days')
    .toISOString(),
});

export const getMarketCapMonth = () => ({
  type: GET_TOTAL_MARKET_CAP_MONTH,
  start: moment()
    .subtract(1, 'months')
    .toISOString(),
});

export const getMarketCapYear = () => ({
  type: GET_TOTAL_MARKET_CAP_YEAR,
  start: moment()
    .subtract(1, 'year')
    .toISOString(),
});
