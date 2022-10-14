import axios from 'axios';
import config from '../config/config';

async function getMovies() {
  const endpoint = config.backendUrl + 'movies';

  const response = await axios.get(endpoint, {
    headers: {
      'x-auth-token': localStorage.getItem('x-auth-token'),
    },
  });

  return response.data;
}

async function addMovie({ posterImageUrl, name, releaseYear }) {
  const endpoint = config.backendUrl + 'movies';

  const response = await axios.post(
    endpoint,
    {
      posterImageUrl,
      name,
      releaseYear,
    },
    {
      headers: {
        'x-auth-token': localStorage.getItem('x-auth-token'),
      },
    }
  );

  return response;
}

async function editMovie(id, { posterImageUrl, name, releaseYear }) {
  const endpoint = config.backendUrl + 'movies/' + id;

  const response = await axios.put(
    endpoint,
    {
      posterImageUrl,
      name,
      releaseYear,
    },
    {
      headers: {
        'x-auth-token': localStorage.getItem('x-auth-token'),
      },
    }
  );

  return response;
}

async function deleteMovie(id) {
  const endpoint = config.backendUrl + 'movies/' + id;

  const response = await axios.delete(endpoint, {
    headers: {
      'x-auth-token': localStorage.getItem('x-auth-token'),
    },
  });

  return response;
}

export default {
  getMovies,
  addMovie,
  deleteMovie,
  editMovie,
};
