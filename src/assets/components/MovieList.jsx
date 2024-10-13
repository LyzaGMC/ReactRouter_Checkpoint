// MovieList.jsx

import React from "react";

const MovieList = ({ movies, onMovieSelect }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div
          className="movie-item"
          key={movie.id}
          onClick={() => onMovieSelect(movie)}
        >
          <img
            src={movie.posterURL}
            alt={movie.title}
            className="movie-poster"
          />
          <h3 className="movie-title">{movie.title}</h3>
          <p className="movie-rating">Rating: {movie.rating}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
