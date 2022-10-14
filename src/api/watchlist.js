import axios from 'axios';
import config from '../config/config';

async function getWatchlist() {
  const endpoint = config.backendUrl + 'watchlist';

  const response = await axios.get(endpoint, {
    headers: {
      'x-auth-token': localStorage.getItem('x-auth-token'),
    },
  });

  return response.data;
}

async function addToWatchlist(id) {
  const endpoint = config.backendUrl + 'watchlist/add/' + id;

  const response = await axios.post(
    endpoint,
    {},
    {
      headers: {
        'x-auth-token': localStorage.getItem('x-auth-token'),
      },
    }
  );

  return response;
}

async function removeFromWatchlist(id) {
  const endpoint = config.backendUrl + 'watchlist/remove/' + id;

  const response = await axios.delete(endpoint, {
    headers: {
      'x-auth-token': localStorage.getItem('x-auth-token'),
    },
  });

  return response;
}

export default {
  getWatchlist,
  addToWatchlist,
  removeFromWatchlist,
};
