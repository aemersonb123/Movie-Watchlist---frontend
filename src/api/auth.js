import axios from 'axios';
import config from '../config/config';

async function login(username, password) {
  const endpoint = config.backendUrl + 'auth';

  const response = await axios.post(endpoint, {
    username,
    password,
  });

  return response;
}

async function register(username, password) {
  const endpoint = config.backendUrl + 'users';

  const response = await axios.post(endpoint, {
    username,
    password,
  });

  return response;
}

export default {
  login,
  register,
};
