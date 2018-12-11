import axios from 'axios';

const {REACT_APP_API_BASE_URL, REACT_APP_API_KEY} = process.env;

export async function getAllCurrencies() {
  console.log(process.env.REACT_APP_API_KEY);
  const res = await axios.get(`${REACT_APP_API_BASE_URL}${REACT_APP_API_KEY}`);
  console.log(JSON.stringify(res));
}
