import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import MoviePage from './components/MoviePage'
import Header from './components/Header'
import Search from './components/Search'
import About from './components/About'

function App() {
  return (
    <div>

      <Header/>

      <Switch>

        {/* /movies may need to be nested in page */}
        {/* - when refresed /movies works as expected 
            - if movies has search string not precedeed by '/'
              it doesn't work without refreshing (path doesn't match, renders 404)
            - if search string is precedeed by '/' appropriate component renders
              but it doesn't fetch until refreshed
        */}
        <Route path="/movies">
          <MoviePage/>
        </Route>

        <Route path="/search">
          <Search/>
        </Route>

        <Route path="/about">
          <About/>
        </Route>

        <Route exact path="/">
          <Home/>
        </Route>

        <Route path="*">
          <h1>404 Page Not Found</h1>
        </Route>

      </Switch>

    </div>
  );
}

export default App
