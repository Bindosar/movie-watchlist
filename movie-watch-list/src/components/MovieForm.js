import { Button, ButtonGroup, TextField } from "@material-ui/core";
import React from "react";

const MovieForm = ({ setMovie, movie, createMovie }) => {
  return (
    <form>
      <ButtonGroup>
        <TextField
          onChange={(event) =>
            setMovie({ ...movie, title: event.target.value })
          }
          placeholder="Movie name "
        />
        <TextField
          onChange={(event) => setMovie({ ...movie, img: event.target.value })}
          placeholder="Movie url "
        />

        <Button
          variant="contained"
          color="primary"
          onClick={() => createMovie(movie)}
        >
          New movie
        </Button>
      </ButtonGroup>
    </form>
  );
};

export default MovieForm;
