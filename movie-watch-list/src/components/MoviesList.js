import React, { useState } from "react";
import Movie from "./Movie";
import { MoviesListStyled } from "../styles/styledComponents";
import SearchBar from "./SearchBar";
import { Container } from "@material-ui/core";

const MoviesList = ({ movies, checkMovieAsWatched, deleteMovie }) => {
  const [query, setQuery] = useState("");

  const filterByTitleCondition = (movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase());

  return (
    <Container>
      <MoviesListStyled>
        <SearchBar query={query} setQuery={setQuery} />
        <h3>{movies.filter(filterByTitleCondition).length} </h3>
        {movies.filter(filterByTitleCondition).map((movie) => (
          <Movie
            deleteMovie={deleteMovie}
            movie={movie}
            checkMovieAsWatched={checkMovieAsWatched}
          />
        ))}
      </MoviesListStyled>
    </Container>
  );
};

export default MoviesList;
