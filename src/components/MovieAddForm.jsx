import React from 'react';
import { useState } from 'react';
import movies from '../api/movies';
import MovieForm from './MovieForm';
import { useNavigate } from 'react-router-dom';

function MovieAddForm() {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    movies
      .addMovie(values)
      .then(() => {
        navigate('/');
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
