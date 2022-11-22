import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { API_ENDPOINT, noImagePlaceholder } from '../utils'

const MoviePage = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(API_ENDPOINT + `&i=${id}`);
      const json = await response.json();
      setData(json);
    }
    fetchData();
  }, []);

  if(!data)
    return <h1>Loading...</h1>

  return (
    <section className="single-movie">

      <img 
        src={data.Poster !== 'N/A' ? data.Poster : noImagePlaceholder}
        alt={data.Title}
      />

      <div className="single-movie-info">

        <h2>{data.Title}</h2>

        <p>{data.Plot !== 'N/A' ? data.Plot : 'Plot unavailable.'}</p>

        <h4>{data.Year}</h4>

        <button 
          className="btn"
          onClick={() => history.go(-1)}
        >
          back to movies
        </button>

      </div>

    </section>
  );
}

export default MoviePage
