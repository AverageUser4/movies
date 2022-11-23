import React from 'react'

import Movie from './Movie.js';

const Movies = ({ movies }) => {
  return (
    <section className="movies">

      {
        movies.map(movie =>
          <Movie
            key={movie.imdbID}
            movie={movie}
          />
        )
      }

    </section>
  );
}

export default Movies