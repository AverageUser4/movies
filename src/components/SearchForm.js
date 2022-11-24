import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'

const SearchForm = ({ query, error, loading }) => {
  const [textInput, setTextInput] = useState(query);
  const [select, setSelect] = useState('any');
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    setRedirect(false);
  }, [redirect])


  function handleSubmit(event) {
    event.preventDefault();
    setRedirect(true);
  }

  if(redirect) {
    let url = '/search';
    url += textInput ? `?s=${textInput}&page=1` : '';
    url += textInput && select !== 'any' ? `&type=${select}` : '';
    return <Redirect to={url}/>;
  }

  return (
    <form 
      className="search-form"
      onSubmit={handleSubmit}
    >

      <h3 className="search-prompt">Search for your favorite movies!</h3>

      <input 
        className="form-input"
        onChange={(e) => setTextInput(e.target.value)}
        value={textInput}
      />

      <select 
        className="form-input"
        value={select}
        onChange={(e) => { 
          setSelect(e.target.value);
          handleSubmit(e);
        }}
      >

        <option value="any">Any</option>
        <option value="movie">Movie</option>
        <option value="series">Series</option>

      </select>

      {error && <div className="error">{error}</div>}

      {loading && <div className="loading"></div>}

    </form>
  );
}

export default SearchForm
