import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'

const SearchForm = ({ query }) => {
  const [textInput, setTextInput] = useState(query);
  const [redirect, setRedirect] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setRedirect(true);
  }

  useEffect(() => {
    setRedirect(false);
  }, [redirect])

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

      {redirect && <Redirect to={`/${textInput}/1`}/>}

    </form>
  );
}

export default SearchForm
