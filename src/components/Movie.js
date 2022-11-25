import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Movie({ movie }) {
  const { search } = useLocation();

  return (
    <Link 
      to={{ pathname: `/movies/?i=${movie.imdbID}`, state: `/search${search}` }}
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