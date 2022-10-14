import React from 'react';

function MovieCard({
  _id,
  name,
  releaseYear,
  posterImageUrl,
  onAdd,
  onEdit,
  onDelete,
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
      {localStorage.getItem('x-auth-token') && (
        <div className='movie-card--actions'>
          <div className='movie-card--action' onClick={() => onAdd(_id)}>
            Add
          </div>
          <div
            className='movie-card--action movie-card--delete'
            onClick={() => onDelete(_id)}
          >
            Delete
          </div>
          <div className='movie-card--action' onClick={() => onEdit(_id)}>
            Edit
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieCard;
