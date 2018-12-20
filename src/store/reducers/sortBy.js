import {
  SORT_BY_DAY,
  SORT_BY_WEEK,
  SORT_BY_MONTH,
  SORT_BY_YEAR,
  SORT_BY_SEARCH,
} from '../constants/sortBy';

const sortByReducer = (state = [], action) => {
  const {chunk} = action;

  switch (action.type) {
    case SORT_BY_DAY: {
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
    default:
      return state;
  }
};

export default sortByReducer;
