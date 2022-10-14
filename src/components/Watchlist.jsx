import React, { useEffect } from 'react';
import { useState } from 'react';
import watchlist from '../api/watchlist';
import WatchlistItem from './WatchlistItem';

function Watchlist() {
  const [movies, setMovies] = useState([]);

  const handleMovieWatched = (_id) => {
    watchlist
      .removeFromWatchlist(_id)
      .then(() => setMovies(movies.filter((movie) => movie._id !== _id)));
  };

  const loadWatchlist = async () => {
    setMovies(await watchlist.getWatchlist());
  };

  useEffect(() => {
    loadWatchlist();
  }, []);

  return (
    <div className='movie-list'>
      <div className='container'>
        <h1 className='section-title'>My watchlist</h1>
        <div className='row'>
          {movies.map((movie) => (
            <div key={movie._id} className='col-md-3 movie-card-container'>
              <WatchlistItem {...movie} onMovieWatched={handleMovieWatched} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Watchlist;
