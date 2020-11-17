import React, { useState } from "react";
import MovieForm from "./MovieForm";
function Navbar({ createMovie }) {
  const [movie, setMovie] = useState({ title: "", img: "" });
  return (
    <>
      <MovieForm movie={movie} setMovie={setMovie} />
      <button onClick={() => createMovie(movie)}>New movie</button>
    </>
  );
}

export default Navbar;
