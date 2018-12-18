import {reduce, find, propEq, merge, toString, split} from 'ramda';

export const arrayConcater = (arr1, arr2) => {
  const merged = reduce((array, item) => {
    const x = find(propEq('currency', item.currency))(arr2);

    return x ? [...array, merge(item, x)] : array;
  }, [])(arr1);

  return merged;
};
export const moneyPrettier = (num, digit) =>
  num.toLocaleString('en', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: digit,
    maximumFractionDigits: digit,
  });

export const numberPrettier = num => {
  if (isNaN(num)) return num;
  const checker = split('.', toString(num))[0];

  if (checker.length > 6) return moneyPrettier(parseInt(num), 0);
  if (checker.length >= 3) return moneyPrettier(parseFloat(num), 2);

  return moneyPrettier(parseFloat(num), 5);
};

export const supplyPrettier = num => {
  if (isNaN(num)) return 'UNKNOWN';

  return split(
    '$',
    toString(
      num.toLocaleString('en', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      })
    )
  )[1].slice(0, -1);
};
