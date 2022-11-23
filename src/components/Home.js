import React from 'react'
import { useParams, Redirect } from 'react-router-dom';

import Form from './SearchForm'
import Movies from './Movies'
import Pagination from './Pagination'
import useMovieFetch from '../hooks/useMovieFetch.js';

const Home = () => {
  const query = useParams().query ?? '';
  const currentPage = Number(useParams().page);

  const { movies, pagesCount, error, loading } = useMovieFetch({ query, page: currentPage });

  if(query && (!currentPage || currentPage < 1))
    return <Redirect to={`/${query}/1`}/>

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

export default Home