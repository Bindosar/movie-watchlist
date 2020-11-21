import "./App.css";
import Navbar from "./components/Navbar";
import MoviesList from "./components/MoviesList";
import Footer from "./components/Footer";
import { useState } from "react";
import moviesJson from "./data/movies.json";
// STYLES
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { NotWatchedList } from "./styles/styledComponents";
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
  const createMovie = (movie) => {
    const updatedMovie = { ...movie };
    updatedMovie.id = movies[movies.length - 1].id + 1;
    setMovies([...movies, updatedMovie]);
  };

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
          <NotWatchedList>Not Watched List</NotWatchedList>
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
