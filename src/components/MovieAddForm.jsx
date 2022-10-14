import React from 'react';
import { useState } from 'react';
import movies from '../api/movies';
import MovieForm from './MovieForm';

function MovieAddForm() {
  const [error, setError] = useState('');

  const handleSubmit = (values) => {
    movies
      .addMovie(values)
      .then((response) => {
        setError('');
      })
      .catch((error) => setError(error.response.data));
  };

  return (
    <div>
      <MovieForm
        formTitle='Add a movie'
        onSubmit={handleSubmit}
        errorMessage={error}
      />
    </div>
  );
}

export default MovieAddForm;
