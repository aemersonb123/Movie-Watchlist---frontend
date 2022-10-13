import React from 'react';
import { useState } from 'react';
import MovieForm from './MovieForm';

function MovieEditForm() {
  const [error, setError] = useState('');
  const [movie, setMovie] = useState({
    _id: 1,
    name: 'John Wick',
    releaseYear: 2014,
    posterImageUrl:
      'https://www.themoviedb.org/t/p/original/d7YxLE6ohg7TnDLYr6DEvyAxnC8.jpg',
  });

  const handleSubmit = (values) => {
    console.log(values);
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
