import React, { useState } from "react";
import {
  MovieStyled,
  MovieImageStyled,
  MovieActionsButtons,
} from "../styles/styledComponents";
function Movie({ movie, checkMovieAsWatched, deleteMovie }) {
  const [imageHiddin, setImageHiddin] = useState(true);
  return (
    <MovieStyled>
      {!imageHiddin && <MovieImageStyled src={movie.img} />}
      <h1
        onMouseEnter={() => setImageHiddin(!imageHiddin)}
        // onMouseLeave={() => setImageHiddin(true)}
      >
        {movie.title}
      </h1>
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
