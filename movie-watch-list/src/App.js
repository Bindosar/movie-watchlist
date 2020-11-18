import "./App.css";
import Navbar from "./components/Navbar";
import MoviesList from "./components/MoviesList";
import Footer from "./components/Footer";
import { useState } from "react";
import moviesJson from "./data/movies.json";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

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
      <CenteredGrid
        movies={movies}
        deleteMovie={deleteMovie}
        checkMovieAsWatched={checkMovieAsWatched}
      />
      <Footer />
    </>
  );
}
export default App;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export function CenteredGrid({ movies, deleteMovie, checkMovieAsWatched }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <h1>Not Watched List</h1>
          <MoviesList
            checkMovieAsWatched={checkMovieAsWatched}
            movies={movies.filter((movie) => !movie.watched)}
            deleteMovie={deleteMovie}
          />
        </Grid>
        <Grid item xs={6}>
          <h1>Watched List</h1>
          <MoviesList
            checkMovieAsWatched={checkMovieAsWatched}
            movies={movies.filter((movie) => movie.watched)}
            deleteMovie={deleteMovie}
          />
        </Grid>
      </Grid>
    </div>
  );
}
