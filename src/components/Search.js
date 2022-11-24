import React from 'react'

import Form from './SearchForm'
import Movies from './Movies'
import Pagination from './Pagination'
import useMovieFetch from '../hooks/useMovieFetch.js';
import useQueryString from '../hooks/useQueryString';
import { useLocation } from 'react-router-dom';

const Search = () => {
  const query = useQueryString().s;
  const currentPage = parseInt(useQueryString().page) || 1;
  const { search } = useLocation();

  const { movies, pagesCount, error, loading } = useMovieFetch({ search });

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