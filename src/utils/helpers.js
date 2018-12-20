import {reduce, find, propEq, merge, toString, split, reverse} from 'ramda';

export const arrayConcater = (arr1, arr2) => {
  const merged = reduce((array, item) => {
    const x = find(propEq('currency', item.currency))(arr2);

    return x ? [...array, merge(item, x)] : array;
  }, [])(arr1);

  return merged;
};

export const athConcater = (arr1, arr2) => {
  const merged = reduce((array, item) => {
    const x = find(propEq('currency', item.currency))(arr2);
    // console.log(x);

    return x ? [...array, merge(item, {ath: x})] : array;
    // return [];
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

export const changePrettier = num => {
  if (isNaN(num)) return num;

  const decimal = parseFloat(num).toFixed(2);
  if (decimal >= 100.0) return '100.00%';
  if (decimal <= -100.0) return '-100.00%';

  return `${decimal}%`;
};

export const athPrettier = (ch, ath) => {
  if (isNaN(ch) || isNaN(ath)) return '-';

  const percentage = (parseFloat(ch) / parseFloat(ath)) * 100.0;
  if (percentage < 1.0) return '<1%';

  return `${parseInt(percentage)}%`;
};

export const marketCapPrettier = num => {
  let result = '';
  if (isNaN(num)) return '-';
  if (num.length > 8) {
    const insertComma = num
      .toString()
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    result = reverse(reverse(insertComma).slice(9)).replace(',', '.');
  }

  return `${result}B`;
};
