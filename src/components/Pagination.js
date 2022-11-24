import React from 'react';
import { Link } from 'react-router-dom';

export default function Pagination({ query, currentPage, pagesCount }) {
  const paginationElements = [];
  for(let i = 1; i <= pagesCount; i++) {
    if(Math.abs(i - currentPage) <= 3)
      paginationElements.push(
        <li key={i}>

          <Link
            to={`/search?s=${query}&page=${i}`}
            className={'btn' + (i === currentPage ? ' btn--active' : '')}
          >
            {i}
          </Link>

        </li>
    );
  }

  if(pagesCount <= 1)
    return null;

  return (
    <ul className="pagination">

      <Link 
        className="btn"
        to={`/search?s=${query}&page=1`}
        title={1}
      >
        &lt;&lt;
      </Link>

      {paginationElements}

      <Link 
        className="btn"
        to={`/search?s=${query}&page=${pagesCount}`}
        title={pagesCount}
      >
        &gt;&gt;
      </Link>

    </ul>
  );
}