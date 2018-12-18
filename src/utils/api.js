import axios from 'axios';

const {
  REACT_APP_API_BASE_CURRENCY,
  REACT_APP_API_KEY,
  REACT_APP_API_MARKET_CAP,
  REACT_APP_API_BASE_DASHBOARD,
  REACT_APP_API_BASE_PRICE,
} = process.env;

export async function getAllCurrencies() {
  const res = await axios.get(
    `${REACT_APP_API_BASE_CURRENCY}${REACT_APP_API_KEY}`
  );
}

export async function getTotalMarketCap(start) {
  const res = await axios.get(
    `${REACT_APP_API_MARKET_CAP}${REACT_APP_API_KEY}&start=${'2018-12-15'}`
  );

  // console.log(res);
}
export async function getDashboard() {
  const res = await axios.get(
    `${REACT_APP_API_BASE_DASHBOARD}${REACT_APP_API_KEY}`
  );

  return res.data;
}
export async function getPrice() {
  const res = await axios.get(
    `${REACT_APP_API_BASE_PRICE}${REACT_APP_API_KEY}`
  );

  return res.data;
}
