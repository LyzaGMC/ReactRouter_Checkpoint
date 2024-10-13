// App.jsx

import React, { useState } from "react";
import MovieDetails from "./assets/components/MovieDetails";
import MovieList from "./assets/components/MovieList";

import "./App.css";
// Exemple de données de films
const movies = [
  {
    id: 1,
    title: "Inception",
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology.",

    rating: 8.8,
    trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0",
  },
  {
    id: 2,
    title: "Interstellar",
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    posterURL: "./assets/images/interstellar.jpg",
    rating: 8.6,
    trailerLink: "https://www.youtube.com/watch?v=zSWdZVtXT7E",
  },
  {
    id: 3,
    title: "The Dark Knight",
    description:
      "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
    posterURL: "./assets/images/dark_knight.jpg",
    rating: 9.0,
    trailerLink: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
  },
];

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
  };

  const handleBackToList = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="App">
      <h1>Movie App</h1>
      {!selectedMovie ? (
        <MovieList movies={movies} onMovieSelect={handleMovieSelect} />
      ) : (
        <MovieDetails movie={selectedMovie} onBack={handleBackToList} />
      )}
    </div>
  );
}

export default App;
