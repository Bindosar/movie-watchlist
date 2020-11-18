import React, { useState } from "react";
import Movie from "./Movie";
import { MoviesListStyled } from "../styles/styledComponents";

const MoviesList = ({ movies, checkMovieAsWatched, deleteMovie }) => {
  return (
    <MoviesListStyled>
      {movies.map((movie) => (
        <Movie
          deleteMovie={deleteMovie}
          movie={movie}
          checkMovieAsWatched={checkMovieAsWatched}
        />
      ))}
    </MoviesListStyled>
  );
};

export default MoviesList;
