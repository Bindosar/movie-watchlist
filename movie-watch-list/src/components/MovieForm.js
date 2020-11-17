import React from "react";

const MovieForm = ({ setMovie, movie }) => {
  return (
    <form>
      <input
        onChange={(event) => setMovie({ ...movie, title: event.target.value })}
        type="text"
        placeholder="Movie name "
      />
      <input
        onChange={(event) => setMovie({ ...movie, img: event.target.value })}
        type="text"
        placeholder="Movie url "
      />
    </form>
  );
};

export default MovieForm;
