import React from 'react'
import { useParams, useLocation, Link } from 'react-router-dom'
import useMovieFetch from '../hooks/useMovieFetch'

const noImagePlaceholder = 'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';

const MoviePage = () => {
  const { id } = useParams();
  const { movies, loading, error } = useMovieFetch({ id });
  const { state } = useLocation();

  const goBackButton = <Link className="btn" to={state ?? '/'}>back to movies</Link>;

  if(loading)
    return <div className="loading"></div>

  if(error)
    return (
      <div>

        <h1>Movie not found!</h1>

        {goBackButton}

      </div>
    );

  return (
    <section className="single-movie">

      <img 
        src={movies.Poster !== 'N/A' ? movies.Poster : noImagePlaceholder}
        alt={movies.Title}
      />

      <div className="single-movie-info">

        <h2>{movies.Title}</h2>

        <p>{movies.Plot !== 'N/A' ? movies.Plot : 'Plot unavailable.'}</p>

        <h4>{movies.Year}</h4>

        {goBackButton}

      </div>

    </section>
  );
}

export default MoviePage
