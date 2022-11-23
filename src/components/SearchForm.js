import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'

const SearchForm = ({ query, error, loading }) => {
  const [textInput, setTextInput] = useState(query);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    setRedirect(false);
  }, [redirect])


  function handleSubmit(event) {
    event.preventDefault();
    setRedirect(true);
  }

  if(redirect)
    return <Redirect to={textInput ? `/${textInput}/1` : '/'}/>;

  return (
    <form 
      className="search-form"
      onSubmit={handleSubmit}
    >

      <h2>search movies</h2>

      <input 
        className="form-input"
        onChange={(e) => setTextInput(e.target.value)}
        value={textInput}
      />

      {error && <div className="error">{error}</div>}

      {!query && <h3 className="search-prompt">Search for your favorite movies!</h3>}

      {loading && <h3 className="search-prompt">Loading...</h3>}

    </form>
  );
}

export default SearchForm
