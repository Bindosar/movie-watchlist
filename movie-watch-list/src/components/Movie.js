import React, { useState } from "react";
import {
  MovieStyled,
  MovieImageStyled,
  MovieActionsButtons,
} from "../styles/styledComponents";

import Button from "@material-ui/core/Button";
import MovieMU from "../styles/MovieMU";
function Movie({ movie, checkMovieAsWatched, deleteMovie }) {
  const [imageHiddin, setImageHiddin] = useState(true);
  return (
    <MovieMU
      movie={movie}
      watchMovie={checkMovieAsWatched}
      deleteMovie={deleteMovie}
    />
    // <MovieStyled>
    //   {!imageHiddin && <MovieImageStyled src={movie.img} />}
    //   <h1
    //     onMouseEnter={() => setImageHiddin(!imageHiddin)}
    //     // onMouseLeave={() => setImageHiddin(true)}
    //   >
    //     {movie.title}
    //   </h1>
    //   <h4 style={{ color: "#148914" }}>{movie.rating}</h4>
    //   <MovieActionsButtons>
    //     <Button
    //       variant="contained"
    //       color="primary"
    //       onClick={() => checkMovieAsWatched(movie.id)}
    //     >
    //       {movie.watched ? "not watched" : "watched"}
    //     </Button>
    //     <Button
    //       variant="contained"
    //       color="secondary"
    //       className="btn"
    //       onClick={() => deleteMovie(movie.id)}
    //     >
    //       Delete
    //     </Button>
    //   </MovieActionsButtons>
    // </MovieStyled>
  );
}

export default Movie;
