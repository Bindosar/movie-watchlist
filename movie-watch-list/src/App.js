import "./App.css";
import Button from "react-bootstrap/Button";
import Navbar from "./components/Navbar";
import MoviesList from "./components/MoviesList";
import Footer from "./components/Footer";
import { useState } from "react";
import moviesJson from "./data/movies.json";

function App() {
  const [movies, setMovies] = useState(moviesJson);

  const checkMovieAsWatched = (id) => {
    const updatedMovies = [...movies];
    const movie = updatedMovies.find((movie) => movie.id === id);
    movie.watched = !movie.watched;
    setMovies(updatedMovies);
  };
  return (
    <>
      <Navbar />
      <h1>Watched List</h1>
      <MoviesList
        checkMovieAsWatched={checkMovieAsWatched}
        movies={movies.filter((movie) => movie.watched)}
      />
      <h1>Not Watched List</h1>
      <MoviesList
        checkMovieAsWatched={checkMovieAsWatched}
        movies={movies.filter((movie) => !movie.watched)}
      />

      <Footer />
    </>
  );
}
export default App;
