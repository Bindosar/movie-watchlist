import React from "react";
import Movie from "./Movie";
import { MoviesListStyled } from "../styles/styledComponents";

const MoviesList = ({ movies, checkMovieAsWatched }) => (
  <MoviesListStyled>
    {movies.map((movie) => (
      <Movie movie={movie} checkMovieAsWatched={checkMovieAsWatched} />
    ))}
  </MoviesListStyled>
);

export default MoviesList;
