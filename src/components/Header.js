import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="website-header">

      <Link to="/" className="website-header__link">Epic movies</Link>

      <div className="website-header__right">

        <Link to="/about" className="website-header__link website-header__link--small">
          About us
        </Link>

        <Link to="/search" className="website-header__link website-header__link--small">
          <FaSearch/>
        </Link>

      </div>


    </header>
  );
}