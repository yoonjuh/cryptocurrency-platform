import {
  SORT_BY_DAY,
  SORT_BY_WEEK,
  SORT_BY_MONTH,
  SORT_BY_YEAR,
  SORT_BY_SEARCH,
} from '../constants/sortBy';

export const sortByDay = chunk => ({
  type: SORT_BY_DAY,
  chunk,
});

export const sortByWeek = chunk => ({
  type: SORT_BY_WEEK,
  chunk,
});

export const sortByMonth = chunk => ({
  type: SORT_BY_MONTH,
  chunk,
});

export const sortByYear = chunk => ({
  type: SORT_BY_YEAR,
  chunk,
});
