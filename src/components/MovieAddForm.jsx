import React from 'react';
import { useState } from 'react';
import MovieForm from './MovieForm';

function MovieAddForm() {
  const [error, setError] = useState('');

  const handleSubmit = (values) => {
    console.log(values);
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
