import React from 'react';
import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import moviesApi from '../api/movies';
import watchlist from '../api/watchlist';
import { toast, ToastContainer } from 'react-toastify';

function MovieList({ loggedIn }) {
  const [movies, setMovies] = useState([]);

  const loadMovies = async () => {
    setMovies(await moviesApi.getMovies());
  };

  useEffect(() => {
    loadMovies();
  }, []);

  const handleAddtoWatchlist = (_id) => {
    watchlist
      .addToWatchlist(_id)
      .then(() => {
        console.log('Success');
        toast.success('Added to watchlist!');
      })
      .catch((error) => toast.error(error.response.data));
  };

  const handleDelete = (_id) => {
    moviesApi
      .deleteMovie(_id)
      .then(() => setMovies(movies.filter((movie) => movie._id !== _id)));
  };

  const handleEdit = (_id) => {
    console.log('Editing movie: ' + _id);
  };

  return (
    <div className='movie-list'>
      <div className='container'>
        <div className='row'>
          {movies.map((movie) => (
            <div key={movie._id} className='col-md-3 movie-card-container'>
              <MovieCard
                {...movie}
                loggedIn={loggedIn}
                onAdd={handleAddtoWatchlist}
                onDelete={handleDelete}
                onEdit={handleEdit}
              />
            </div>
          ))}
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default MovieList;
