import React from 'react';
import { Link } from 'react-router-dom';

export default function Pagination({ query, currentPage, pages }) {
  const paginationElements = [];
  for(let i = 1; i <= pages; i++) {
    if(Math.abs(i - currentPage) <= 3)
      paginationElements.push(
        <li key={i}>

          <Link
            to={`/${query}/${i}`}
            className={'btn' + (i === currentPage ? ' btn--active' : '')}
          >
            {i}
          </Link>

        </li>
    );
  }

  if(pages <= 1)
    return null;

  return (
    <ul className="pagination">

      <Link 
        className="btn"
        to={`/${query}/1`}
        title={1}
      >
        &lt;&lt;
      </Link>

      {paginationElements}

      <Link 
        className="btn"
        to={`/${query}/${pages}`}
        title={pages}
      >
        &gt;&gt;
      </Link>

    </ul>
  );
}