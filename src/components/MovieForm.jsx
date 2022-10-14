import React, { useState } from 'react';

function MovieForm({
  formTitle,
  submitLabel,
  onSubmit,
  errorMessage,
  movie = {},
}) {
  const { name, releaseYear, posterImageUrl: initialPosterImageUrl } = movie;

  const [posterImageUrl, setPosterImageUrl] = useState(
    initialPosterImageUrl ? initialPosterImageUrl : ''
  );
  const [movieName, setMovieName] = useState(name ? name : '');
  const [movieReleaseYear, setMovieReleaseYear] = useState(
    name ? releaseYear : ''
  );

  return (
    <div className='form'>
      <h1 className='section-title'>{formTitle}</h1>
      <div className='inputs-container'>
        <input
          type='text'
          placeholder='Movie poster image url (2x3)...'
          className='form-control'
          value={posterImageUrl}
          onChange={({ target }) => setPosterImageUrl(target.value)}
        />
        <input
          type='text'
          placeholder='Movie name...'
          className='form-control'
          value={movieName}
          onChange={({ target }) => setMovieName(target.value)}
        />
        <input
          type='number'
          placeholder='Movie release year...'
          className='form-control'
          value={movieReleaseYear}
          onChange={({ target }) => setMovieReleaseYear(parseInt(target.value))}
        />

        {errorMessage && (
          <div className='alert alert-danger'>{errorMessage}</div>
        )}

        <button
          type='submit'
          className='btn btn-primary btn-lg'
          onClick={() =>
            onSubmit({
              name: movieName,
              releaseYear: movieReleaseYear,
              posterImageUrl,
            })
          }
        >
          {submitLabel ? submitLabel : 'Submit'}
        </button>
      </div>
    </div>
  );
}

export default MovieForm;
