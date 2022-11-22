import React from 'react';
import { Link } from 'react-router-dom';

export default function Pagination({ pages }) {
  const paginationElements = [];
  for(let i = 1; i <= pages; i++) {
    paginationElements.push(
      <li key={i}>

        <Link
          to={`/${i}`}
          className="btn"
        >
          {i}
        </Link>

      </li>
    );
  }

  return (
    <ul className="pagination">

      {paginationElements}

    </ul>
  );
}