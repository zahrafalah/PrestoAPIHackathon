import React, { useEffect, useState } from "react";
import { movieAPI } from "../api/movie";
import Img from "./download.png";

export default function MovieDetails({ match }) {
  const [err, setErr] = useState("");
  const [error, setError] = useState("");

  const [movie, setMovie] = useState(null);
  const [comments, setComments] = useState(null);
  // const [src, setSrc] = useState(movie.poster);
  useEffect(() => {
    movieAPI
      .getById(match.params.id)
      .then((data) => setMovie(data))
      .catch((e) => setErr(e.message));
  }, []);

  useEffect(() => {
    movieAPI
      .getComments()
      .then((data) => setComments(data))
      .catch((e) => setError(e.message));
  }, []);
  if (!movie) {
    return <div>Loading...</div>;
  }
  return err ? (
    <div>{err}</div>
  ) : (
    <div className="container">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <div className="card">
            <img
              className="card-img-top"
              width="200"
              height="280"
              // onError={(e) => {
              //   setSrc(Img);
              // }}
              src={movie.poster}
              alt="Card image cap"
            />
            <div className="title">
              <span className="bold">Title:</span> {movie.title}
            </div>
            <div className="awards">
              <span className="bold">Awards:</span> {movie.awards.wins}
            </div>
            <div className="rated">
              <span className="bold">Rated:</span> {movie.rated}
            </div>
            <div className="casts">
              {" "}
              <span className="bold">Casts:</span>
              {movie.cast.map((cast) => {
                return cast;
              })}
            </div>
            <div className="countries">
              {" "}
              <span className="bold">Countries:</span>
              {movie.countries.map((country) => country)}
            </div>
            <div className="genres">
              <span className="bold">Genres:</span>{" "}
              {movie.genres.map((genre) => genre)}
            </div>
            <div className="imdb">
              <span className="bold">IMDB:</span> {movie.imdb.rating}
            </div>
            {movie.languages ? (
              <div className="language">
                <span className="bold">languages:</span>
                {movie.languages.map((l) => {
                  return l;
                })}
              </div>
            ) : (
              <div>
                {" "}
                <span className="bold">languages: NAN</span>
              </div>
            )}
            <div className="tomatoes">
              <span className="bold">Tomatoes:</span>{" "}
              {movie.tomatoes.viewer.rating}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
