import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import MoviePage from './components/MoviePage'

function App() {
  return (
    <Switch>

      <Route path={'/movies/:id'}>
        <MoviePage/>
      </Route>

      <Route exact path={["/:query", "/:query/:page", "/"]}>
        <Home/>
      </Route>

      <Route path="*">
        <h1>404 Page Not Found</h1>
      </Route>

    </Switch>
  );
}

export default App
