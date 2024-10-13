// MovieDetails.jsx

import React from "react";

const MovieDetails = ({ movie, onBack }) => {
  return (
    <div className="movie-details">
      <h2>{movie.title}</h2>
      <img
        src={movie.posterURL}
        alt={movie.title}
        className="movie-details-poster"
      />
      <p>{movie.description}</p>
      <p>Rating: {movie.rating}</p>
      <a href={movie.trailerLink} target="_blank" rel="noopener noreferrer">
        Watch Trailer
      </a>
      <button onClick={onBack}>Back to Movie List</button>
    </div>
  );
};

export default MovieDetails;
