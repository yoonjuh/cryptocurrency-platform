import {sort} from 'ramda';
import {
  SORT_BY_DAY,
  SORT_BY_WEEK,
  SORT_BY_MONTH,
  SORT_BY_YEAR,
  SORT_BY_NAME,
  SORT_BY_MARKETCAP,
  SORT_BY_PRICE,
  SORT_BY_ATH,
  SORT_BY_CHANGE,
  SORT_BY_VOLUME,
  SORT_BY_SUPPLY,
} from '../constants/sortBy';

const sortByReducer = (state = [], action) => {
  switch (action.type) {
    case SORT_BY_DAY: {
      const {chunk} = action;
      const result = chunk.map(
        ({
          currency,
          ath,
          availableSupply,
          maxSupply,
          price,
          close,
          dayVolume,
          dayOpen,
          dayOpenVolume,
        }) => ({
          currency,
          price,
          availableSupply,
          maxSupply,
          close,
          ath,
          open: dayOpen,
          volume: dayVolume,
          openVolume: dayOpenVolume,
        })
      );
      return result;
    }
    case SORT_BY_WEEK: {
      const {chunk} = action;
      const result = chunk.map(
        ({
          currency,
          price,
          availableSupply,
          maxSupply,
          close,
          ath,
          weekOpen,
          weekVolume,
          weekOpenVolume,
        }) => ({
          price,
          availableSupply,
          maxSupply,
          currency,
          ath,
          close,
          open: weekOpen,
          volume: weekVolume,
          openVolume: weekOpenVolume,
        })
      );
      return result;
    }
    case SORT_BY_MONTH: {
      const {chunk} = action;
      const result = chunk.map(
        ({
          currency,
          price,
          availableSupply,
          maxSupply,
          close,
          ath,
          monthOpen,
          monthVolume,
          monthOpenVolume,
        }) => ({
          price,
          availableSupply,
          maxSupply,
          currency,
          close,
          ath,
          open: monthOpen,
          volume: monthVolume,
          openVolume: monthOpenVolume,
        })
      );
      return result;
    }
    case SORT_BY_YEAR: {
      const {chunk} = action;
      const result = chunk.map(
        ({
          currency,
          price,
          availableSupply,
          maxSupply,
          ath,
          close,
          yearOpen,
          yearVolume,
          yearOpenVolume,
        }) => ({
          price,
          availableSupply,
          maxSupply,
          currency,
          ath,
          close,
          open: yearOpen,
          volume: yearVolume,
          openVolume: yearOpenVolume,
        })
      );
      return result;
    }
    case SORT_BY_NAME: {
      const {chunk, asc} = action;

      if (asc) {
        return sort(
          (a, b) =>
            b.currency.toLowerCase().localeCompare(a.currency.toLowerCase()),
          chunk
        );
      }

      return sort(
        (a, b) =>
          a.currency.toLowerCase().localeCompare(b.currency.toLowerCase()),
        chunk
      );
    }

    case SORT_BY_MARKETCAP: {
      const {chunk, asc} = action;

      if (asc) {
        return sort(
          (a, b) => a.price * a.availableSupply - b.price * b.availableSupply,
          chunk
        );
      }

      return sort(
        (a, b) => b.price * b.availableSupply - a.price * a.availableSupply,
        chunk
      );
    }

    case SORT_BY_PRICE: {
      const {chunk, asc} = action;

      if (asc) {
        return sort((a, b) => a.price - b.price, chunk);
      }

      return sort((a, b) => b.price - a.price, chunk);
    }

    case SORT_BY_ATH: {
      const {chunk, asc} = action;

      if (asc)
        return sort(
          (a, b) =>
            parseInt((a.price / a.ath.price) * 100) -
            parseInt((b.price / b.ath.price) * 100),
          chunk
        );

      return sort(
        (a, b) =>
          parseInt((b.price / b.ath.price) * 100) -
          parseInt((a.price / a.ath.price) * 100),
        chunk
      );
    }

    case SORT_BY_CHANGE: {
      const {chunk, asc} = action;

      if (asc)
        return sort(
          (a, b) =>
            ((a.open - a.close) / a.close) * 100 -
            ((b.open - b.close) / b.close) * 100,
          chunk
        );

      return sort(
        (a, b) =>
          ((b.open - b.close) / b.close) * 100 -
          ((a.open - a.close) / a.close) * 100,
        chunk
      );
    }

    case SORT_BY_VOLUME: {
      const {chunk, asc} = action;

      if (asc) return sort((a, b) => a.volume - b.volume, chunk);

      return sort((a, b) => b.volume - a.volume, chunk);
    }

    case SORT_BY_SUPPLY: {
      const {chunk, asc} = action;

      if (asc)
        return sort((a, b) => a.availableSupply - b.availableSupply, chunk);

      return sort((a, b) => b.availableSupply - a.availableSupply, chunk);
    }

    default:
      return state;
  }
};

export default sortByReducer;
