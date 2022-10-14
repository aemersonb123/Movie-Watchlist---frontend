import React from 'react';

function WatchlistItem({
  _id,
  name,
  releaseYear,
  posterImageUrl,
  onMovieWatched,
}) {
  return (
    <div className='movie-card'>
      <div className='movie-card--movie'>
        <img
          src={posterImageUrl}
          alt={name + "'s poster"}
          className='movie-card--poster'
        />
        <div className='movie-card--title'>
          {name} ({releaseYear})
        </div>
      </div>
      <div className='movie-card--actions'>
        <div className='movie-card--action' onClick={() => onMovieWatched(_id)}>
          Watched
        </div>
      </div>
    </div>
  );
}

export default WatchlistItem;
