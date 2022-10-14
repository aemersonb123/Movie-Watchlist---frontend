import React from 'react';
import { useState } from 'react';
import movies from '../api/movies';
import MovieForm from './MovieForm';

function MovieEditForm() {
  const [error, setError] = useState('');
  const [movie, setMovie] = useState({
    _id: '63490adce3f03a2f911ec843',
    name: 'John Wick',
    releaseYear: 2014,
    posterImageUrl:
      'https://www.themoviedb.org/t/p/original/d7YxLE6ohg7TnDLYr6DEvyAxnC8.jpg',
  });

  const handleSubmit = (values) => {
    movies
      .editMovie(movie._id, values)
      .then(() => setError(''))
      .catch((error) => setError(error.response.data));
  };

  return (
    <div>
      <MovieForm
        formTitle={`Editing: ${movie.name} (${movie.releaseYear})`}
        submitLabel='Save'
        onSubmit={handleSubmit}
        errorMessage={error}
        movie={movie}
      />
    </div>
  );
}

export default MovieEditForm;
