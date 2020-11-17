import React from "react";
import movies from "../data/movies.json";
import Movie from "./Movie";
function MoviesList() {
  return movies.map((movie) => <Movie movie={movie} />);
}

export default MoviesList;
