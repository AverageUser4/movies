import { useLocation } from "react-router-dom";

export default function useQueryString() {
  let query = '';
  let currentPage = 1;

  const search = useLocation().search + '&';
  if(search) {
    // could be made a bit cleaner
    query = search?.match(/query=.+?&/)?.[0]?.replace('query=', '')?.replace('&', '') || '';
    currentPage = parseInt(search?.match(/page=.+?&/)?.[0]?.replace('page=', '')?.replace('&', '')) || 1;
  }

  return { query, currentPage };
}