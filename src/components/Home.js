import React, { useEffect, useState } from 'react'
import { useParams, Redirect } from 'react-router-dom';

import Form from './SearchForm'
import Movies from './Movies'
import Pagination from './Pagination'
import { API_ENDPOINT } from '../utils.js'

const initialResponseData = {
  forQueryString: '',
  pages: null
};

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [responseData, setResponseData] = useState(initialResponseData);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const query = useParams().query ?? '';
  const page = Number(useParams().page);

  useEffect(() => {
    if(!query) {
      setMovies([]);
      setResponseData(initialResponseData);
      setError(null);
      setLoading(false);
      return;
    }

    const ignoreObject = { ignore: false };
    fetchMovies(ignoreObject);

    return () => ignoreObject.ignore = true;
  }, [query, page]);

  if(query && (!page || page < 1))
    return <Redirect to={`/${query}/1`}/>

  async function fetchMovies(ignoreObject) {
    try {
      setLoading(true);
      setError(null);

      let url = API_ENDPOINT;
      url += query ? `&s=${query}` : '';
      url += `&page=${page}`;
  
      const response = await fetch(url);
      const json = await response.json();
  
      if(ignoreObject.ignore)
        return;
  
      if(json.Response === 'False') {
        setResponseData(initialResponseData);
        setMovies([]);
        setError(json.Error);

        return;
      }

      setMovies(json.Search);

      // data about pages
      if(responseData.forQueryString === query)
        return;
  
      // api always returns 10 movies
      const pages = Math.ceil(json.totalResults / 10);
  
      setResponseData({
        forQueryString: query,
        pages,
      });
    } catch(e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

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
              responseData={responseData}
              movies={movies}
            />

            <Pagination
              pages={responseData.pages}
              currentPage={page}
              query={query}
            />
          </>
      }

    </main>
  );
}

export default Home

// relevant params:
//   - i=x - search for movie with given id
//   - returns object with more data about movie than bulk search

//   - s=x - search for given string
//   - page=x - by default api returns page 1, if given page does not exist 
//     (or there was different error, eg. movie not found)
//     it returns { Response: "False", Error: "<error data>"
//   - it may return error when there is too many results, eg. single letter in search string

//   - on success it returns: 
//   {
//     Search: [
//       {
//         Title: "...",
//         Year: "...",
//         imdbID: "...",
//         Type: "...",
//         Poster: "link to image or N/A"
//       },
//       ...
//     ],
//     totalResults: "number",
//     Response: "true"
//   }
//   - 'Search' array has 10 elements, unless it's last page, then it may be less