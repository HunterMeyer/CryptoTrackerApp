import axios from 'axios';
import { apiBaseUrl } from './../Utils/Constants';
import {
  FETCHING_COIN_DATA,
  FETCHING_COIN_DATA_SUCCESS,
  FETCHING_COIN_DATA_FAIL
} from './../Utils/ActionTypes';

export default function FetchCoinData() {
  return dispatch => {

    dispatch({ type: FETCHING_COIN_DATA })

    let coins = [
      { id: 'bitcoin',      quantity: 0.52162222 },
      { id: 'ethereum',     quantity: 32.75071571 },
      { id: 'litecoin',     quantity: 15.5189 },
      { id: 'ripple',       quantity: 10202.284977 },
      { id: 'neo',          quantity: 14.799 },
      { id: 'lisk',         quantity: 35 },
      { id: 'ark',          quantity: 73.31 },
      { id: 'power-ledger', quantity: 335 }
    ];

    let urls = coins.map((coin) => {
      return `${apiBaseUrl}/v1/ticker/${coin.id}`;
    })

    return axios.all(urls.map(url => axios.get(url)))
      .then(axios.spread(function (...res) {
        let totalValue = 0;
        let payload = res.map((r) => {
          data = r.data[0];
          coin = coins.find(coin => coin.id === data.id);
          data.quantity = coin.quantity;
          data.value = coin.quantity * parseFloat(data.price_usd);
          totalValue += data.value;
          return data;
        });
        return dispatch({ type: FETCHING_COIN_DATA_SUCCESS, payload: payload, totalValue: totalValue });
      }))
      .catch(err => {
        return dispatch({ type: FETCHING_COIN_DATA_FAIL, payload: err.data });
      });

    // return axios.get(`${apiBaseUrl}/v1/ticker/?limit=10`)
      // .then(res => {
        // return dispatch({ type: FETCHING_COIN_DATA_SUCCESS, payload: res.data })
      // })
      // .catch(err => {
        // return dispatch({ type: FETCHING_COIN_DATA_FAIL, payload: err.data })
      // });
  }
}
