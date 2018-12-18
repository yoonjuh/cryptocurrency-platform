import {reduce, find, propEq, merge} from 'ramda';

export const arrayConcater = (arr1, arr2) => {
  const merged = reduce((array, item) => {
    const x = find(propEq('currency', item.currency))(arr2);

    return x ? [...array, merge(item, x)] : array;
  }, [])(arr1);

  return merged;
};
