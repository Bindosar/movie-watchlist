import React from "react";
import {
  MovieStyled,
  MovieImageStyled,
  MovieActionsButtons,
} from "../styles/styledComponents";
function Movie({ movie, checkMovieAsWatched, deleteMovie }) {
  return (
    <MovieStyled>
      <MovieImageStyled src={movie.img} />
      <h1>{movie.title}</h1>
      <h4 style={{ color: "#148914" }}>{movie.rating}</h4>
      <MovieActionsButtons>
        <button className="btn" onClick={() => checkMovieAsWatched(movie.id)}>
          {movie.watched ? "not watched" : "watched"}
        </button>
        <button className="btn" onClick={() => deleteMovie(movie.id)}>
          Delete
        </button>
      </MovieActionsButtons>
    </MovieStyled>
  );
}

export default Movie;
