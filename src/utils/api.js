import axios from 'axios';

const {
  REACT_APP_API_BASE_CURRENCY,
  REACT_APP_API_KEY,
  REACT_APP_API_BASE_DASHBOARD,
  REACT_APP_API_BASE_PRICE,
  REACT_APP_API_BASE_ATH,
} = process.env;

export async function getAllCurrencies() {
  const res = await axios.get(
    `${REACT_APP_API_BASE_CURRENCY}${REACT_APP_API_KEY}`
  );
}

export async function getDashboard() {
  const res = await axios.get(
    `${REACT_APP_API_BASE_DASHBOARD}${REACT_APP_API_KEY}`
  );
  const forDemo = res.data.slice(0, 99); /** Demo purpose downsizing */

  return forDemo;
}

export async function getPrice() {
  const res = await axios.get(
    `${REACT_APP_API_BASE_PRICE}${REACT_APP_API_KEY}`
  );
  return res.data;
}

export async function getATH() {
  const res = await axios.get(`${REACT_APP_API_BASE_ATH}${REACT_APP_API_KEY}`);

  return res.data;
}
