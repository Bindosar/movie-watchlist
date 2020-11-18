import React, { useState } from "react";
import Movie from "./Movie";
import { MoviesListStyled } from "../styles/styledComponents";
import SearchBar from "./SearchBar";

const MoviesList = ({ movies, checkMovieAsWatched, deleteMovie }) => {
  const [query, setQuery] = useState("");

  const filterByTitleCondition = (movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase());

  return (
    <MoviesListStyled>
      <SearchBar query={query} setQuery={setQuery} />
      {movies.filter(filterByTitleCondition).map((movie) => (
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
