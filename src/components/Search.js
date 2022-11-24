import React from 'react'

import Form from './SearchForm'
import Movies from './Movies'
import Pagination from './Pagination'
import useMovieFetch from '../hooks/useMovieFetch.js';
import useQueryString from '../hooks/useQueryString';

const Search = () => {
  const { query, currentPage } = useQueryString();

  const { movies, pagesCount, error, loading } = useMovieFetch({ query, page: currentPage });

  return (
    <main>
    
      <Form
        query={query}
        error={error}
        loading={loading}
      />

      {
        !loading &&
          <>
            <Movies
              movies={movies}
            />

            <Pagination
              pagesCount={pagesCount}
              currentPage={currentPage}
              query={query}
            />
          </>
      }

    </main>
  );
}

export default Search