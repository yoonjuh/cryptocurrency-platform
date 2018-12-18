import {
  SORT_BY_DAY,
  SORT_BY_WEEK,
  SORT_BY_MONTH,
  SORT_BY_YEAR,
} from '../constants/sortBy';

const sortByReducer = (state = [], action) => {
  const {chunk} = action;

  switch (action.type) {
    case SORT_BY_DAY: {
      // console.log(`FROM REDUCER, ${JSON.stringify(chunk)}`);
      const result = chunk.map(
        ({
          currency,
          dayVolume,
          dayOpen,
          dayOpenVolume,
          availableSupply,
          maxSupply,
          price,
        }) => ({
          currency,
          price,
          availableSupply,
          maxSupply,
          open: dayOpen,
          volume: dayVolume,
          openVolume: dayOpenVolume,
        })
      );
      return result;
    }
    case SORT_BY_WEEK: {
      return action.price;
    }
    case SORT_BY_MONTH: {
      return action.price;
    }
    case SORT_BY_YEAR: {
      return action.price;
    }
    default:
      return state;
  }
};

export default sortByReducer;
