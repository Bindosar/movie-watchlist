import "./App.css";
import Navbar from "./components/Navbar";
import MoviesList from "./components/MoviesList";
import Footer from "./components/Footer";
import { useState } from "react";
import moviesJson from "./data/movies.json";
import SearchBar from "./components/SearchBar";

function App() {
  // STATES
  const [movies, setMovies] = useState(moviesJson);

  // METHODS
  const checkMovieAsWatched = (id) => {
    const updatedMovies = [...movies];
    const movie = updatedMovies.find((movie) => movie.id === id);
    movie.watched = !movie.watched;
    setMovies(updatedMovies);
  };
  const deleteMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };
  const createMovie = (movie) => [setMovies([...movies, movie])];

  // COMPONENT
  return (
    <>
      <Navbar createMovie={createMovie} />
      <h1>Watched List</h1>

      <MoviesList
        checkMovieAsWatched={checkMovieAsWatched}
        movies={movies.filter((movie) => movie.watched)}
        deleteMovie={deleteMovie}
      />
      <h1>Not Watched List</h1>
      <MoviesList
        checkMovieAsWatched={checkMovieAsWatched}
        movies={movies.filter((movie) => !movie.watched)}
        deleteMovie={deleteMovie}
      />
      <Footer />
    </>
  );
}
export default App;
