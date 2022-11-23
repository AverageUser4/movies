import React from 'react';
import { Link } from 'react-router-dom';

export default function Movie({ movie }) {
  return (
    <Link 
      to={`/movies/${movie.imdbID}`}
      className="movie"
    >

      <article>

        <img
          alt={movie.Title} 
          src={movie.Poster !== 'N/A' ? movie.Poster : null}
        />

        <div className="movie-info">

          <h4 className="title">{movie.Title}</h4>
          <p>{movie.Year}</p>

        </div>

      </article>

    </Link>
  );
}