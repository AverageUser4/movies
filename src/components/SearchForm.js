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

  if(redirect)
    return <Redirect to={textInput ? `/search?query=${textInput}&page=1` : '/search'}/>;

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
        onChange={(e) => setSelect(e.target.value)}
      >

        <option value="any">Any</option>
        <option value="movie">Movie</option>
        <option value="series">Series</option>
        <option value="episode">Episode</option>

        <option value="note">this select does not do anything yet</option>

      </select>

      {error && <div className="error">{error}</div>}

      {loading && <div className="loading"></div>}

    </form>
  );
}

export default SearchForm
