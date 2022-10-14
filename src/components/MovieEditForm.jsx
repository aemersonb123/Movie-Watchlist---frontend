import React from 'react';
import { useState } from 'react';
import movies from '../api/movies';
import MovieForm from './MovieForm';
import { useLocation, useNavigate } from 'react-router-dom';

function MovieEditForm() {
  const [error, setError] = useState('');
  const { movie } = useLocation().state;
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    movies
      .editMovie(movie._id, values)
      .then(() => {
        navigate('/');
      })
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
