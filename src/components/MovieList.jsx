import React from 'react';
import MovieCard from './MovieCard';

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

function MovieList({ loggedIn }) {
  const handleAddtoWatchlist = (_id) => {
    console.log('Added movie: ' + _id + ' to watchlist');
  };

  const handleDelete = (_id) => {
    console.log('Deleted movie: ' + _id);
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
      </div>
    </div>
  );
}

export default MovieList;
