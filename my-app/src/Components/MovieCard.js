import React, { lazy, useEffect, useState } from "react";
import Img from "./download.png";
import { Link } from "react-router-dom";

export default function MovieCard(props) {
  const [src, setSrc] = useState(props.poster);

  return (
    <Link className="card" to={`/Movie/${props._id}`}>
      <img
        className="card-img-top"
        width="200"
        height="280"
        onError={(e) => {
          setSrc(Img);
        }}
        src={
          src ||
          "https://breakthrough.org/wp-content/uploads/2018/10/default-placeholder-image.png"
          //   src
          //     ? src
          //     : "https://breakthrough.org/wp-content/uploads/2018/10/default-placeholder-image.png"
        }
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.plot}</p>
        <p>{props.year}</p>
        <p>{props.rated}</p>
        {/* <a href="#" className="btn btn-primary">
          Go somewhere
        </a> */}
      </div>
    </Link>
  );
}
