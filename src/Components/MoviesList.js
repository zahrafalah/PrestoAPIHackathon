import React, { useState, useEffect } from "react";

import { movieAPI } from "../api/movie";
import MovieCard from "./MovieCard";

export default function MoviesList() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    movieAPI
      .getAll()
      .then((data) => setMovies(data))
      .catch((e) => setError(e.message));
  }, []);

  return error ? (
    <div>{error}</div>
  ) : (
    <div>
      <h1 className="header"> Welcome to Mflix </h1>
      <div className="row">
        {movies.map((movie) => {
          return (
            <div className="col-3">
              <MovieCard key={movie._id} {...movie} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
