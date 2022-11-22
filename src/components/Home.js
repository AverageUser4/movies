import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import Form from './SearchForm'
import Movies from './Movies'
import Pagination from './Pagination'
import { API_ENDPOINT } from '../utils.js'

const Home = () => {
  const { query, page } = useParams();

  const [movies, setMovies] = useState([]);
  const [responseData, setResponseData] = useState({
    forQueryString: '',
    pages: null
  });

  console.log(useParams())

  async function fetchMovies() {
    let url = API_ENDPOINT;
    url += query ? `&s=${query}` : '';
    url += page ? `&page=${page}` : '';

    const response = await fetch(url);
    const json = await response.json();

    setMovies(json.Search || []);

    if(responseData.forQueryString === query)
      return;

    const pages = Math.ceil(json.totalResults / json.Search.length);

    setResponseData({
      forQueryString: query,
      pages,
    });
  }

  useEffect(() => {
    fetchMovies();
  }, [query, page]);

  return (
    <main>
    
      <Form
        query={query}
      />

      <Movies
        responseData={responseData}
        movies={movies}
      />
    
      <Pagination
        pages={responseData.pages}
      />

    </main>
  );
}

export default Home
