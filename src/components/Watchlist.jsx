import React from 'react';
import WatchlistItem from './WatchlistItem';

const movies = [
  {
    _id: 1,
    name: 'John Wick',
    releaseYear: 2014,
    posterImageUrl:
      'https://www.themoviedb.org/t/p/original/d7YxLE6ohg7TnDLYr6DEvyAxnC8.jpg',
  },
  {
    _id: 2,
    name: 'Spider-Man: No Way Home',
    releaseYear: 2021,
    posterImageUrl:
      'https://www.themoviedb.org/t/p/original/uJYYizSuA9Y3DCs0qS4qWvHfZg4.jpg',
  },
  {
    _id: 3,
    name: 'John Wick',
    releaseYear: 2014,
    posterImageUrl:
      'https://www.themoviedb.org/t/p/original/d7YxLE6ohg7TnDLYr6DEvyAxnC8.jpg',
  },
  {
    _id: 5,
    name: 'Spider-Man: No Way Home',
    releaseYear: 2021,
    posterImageUrl:
      'https://www.themoviedb.org/t/p/original/uJYYizSuA9Y3DCs0qS4qWvHfZg4.jpg',
  },
  ,
  {
    _id: 6,
    name: 'John Wick',
    releaseYear: 2014,
    posterImageUrl:
      'https://www.themoviedb.org/t/p/original/d7YxLE6ohg7TnDLYr6DEvyAxnC8.jpg',
  },
  {
    _id: 7,
    name: 'Spider-Man: No Way Home',
    releaseYear: 2021,
    posterImageUrl:
      'https://www.themoviedb.org/t/p/original/uJYYizSuA9Y3DCs0qS4qWvHfZg4.jpg',
  },
  {
    _id: 8,
    name: 'Spider-Man: No Way Home',
    releaseYear: 2021,
    posterImageUrl:
      'https://www.themoviedb.org/t/p/original/uJYYizSuA9Y3DCs0qS4qWvHfZg4.jpg',
  },
];

function Watchlist(userToken) {
  const handleMovieWatched = (_id) => {
    console.log('Watched movie: ' + _id);
  };

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
