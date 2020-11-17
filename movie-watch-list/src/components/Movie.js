import React from "react";
import { MovieStyled, MovieImageStyled } from "../styles/styledComponents";
function Movie({ movie, checkMovieAsWatched }) {
  return (
    <MovieStyled>
      <MovieImageStyled src={movie.img} />
      <div>
        <h1>{movie.title}</h1>

        <button className="btn" onClick={() => checkMovieAsWatched(movie.id)}>
          {movie.watched ? "not watched" : "watched"}
        </button>
      </div>
    </MovieStyled>
  );
}

export default Movie;
