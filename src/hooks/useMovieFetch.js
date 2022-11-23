import { useEffect, useState } from 'react';

export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=d21576fc`;

const initialMovies = [];

export default function useMovieFetch({ query = '', page = null, id = null }) {
  const [movies, setMovies] = useState(initialMovies);
  const [pagesCount, setPagesCount] = useState(1);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if(!query && !id) {
      setMovies(initialMovies);
      setPagesCount(1);
      setError(null);
      setLoading(false);
      return;
    }
  
    const ignoreObject = { ignore: false };
    fetchMovies(ignoreObject);

    return () => ignoreObject.ignore = true;
  }, [query, page, id]);
  
  async function fetchMovies(ignoreObject) {
    try {
      setLoading(true);
      setError(null);

      let url = API_ENDPOINT;
      if(id)
        url += `&i=${id}`;
      else {
        url += query ? `&s=${query}` : '';
        url += `&page=${page}`;
      }
  
      const response = await fetch(url);
      const json = await response.json();
  
      if(ignoreObject.ignore)
        return;
  
      setLoading(false);

      if(json.Response === 'False') {
        setPagesCount(1);
        setMovies(initialMovies);
        setError(json.Error);

        return;
      }

      setMovies(json.Search ? json.Search : json);

      // api always returns 10 movies
      if(json.totalResults)
        setPagesCount(Math.ceil(json.totalResults / 10));

    } catch(e) {
      console.error(e);
      setLoading(false);
    }
  }

  return { movies, pagesCount, error, loading };
}

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