import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

import './index.css'
import App from './App'

const root = ReactDOM.createRoot(window.root);
root.render(
  <StrictMode>

    <Router>
      <App/>
    </Router>

  </StrictMode>
);