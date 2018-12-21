import {
  SORT_BY_DAY,
  SORT_BY_WEEK,
  SORT_BY_MONTH,
  SORT_BY_YEAR,
  SORT_BY_NAME,
  SORT_BY_MARKETCAP,
  SORT_BY_PRICE,
  SORT_BY_CHANGE,
  SORT_BY_ATH,
  SORT_BY_VOLUME,
  SORT_BY_SUPPLY,
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

export const sortByName = (chunk, asc) => ({
  type: SORT_BY_NAME,
  chunk,
  asc,
});

export const sortByMarketCap = (chunk, asc) => ({
  type: SORT_BY_MARKETCAP,
  chunk,
  asc,
});

export const sortByPrice = (chunk, asc) => ({
  type: SORT_BY_PRICE,
  chunk,
  asc,
});

export const sortByChange = (chunk, asc) => ({
  type: SORT_BY_CHANGE,
  chunk,
  asc,
});

export const sortByATH = (chunk, asc) => ({
  type: SORT_BY_ATH,
  chunk,
  asc,
});

export const sortByVolume = (chunk, asc) => ({
  type: SORT_BY_VOLUME,
  chunk,
  asc,
});

export const sortBySupply = (chunk, asc) => ({
  type: SORT_BY_SUPPLY,
  chunk,
  asc,
});
