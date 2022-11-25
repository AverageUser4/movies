import { useLocation } from "react-router-dom";

export default function useQueryString() {
  const searchData = { s: '', page: '1' };

  const { pathname } = useLocation();
  let { search } = useLocation();

  if(!search && pathname.includes('?'))
    search = pathname.slice(pathname.indexOf('?') + 1);

  if(search) {
    var noQuestionMark = search?.slice(search.indexOf('?') + 1);
    var keyVal = noQuestionMark.split('&');

    for(let param of keyVal) {
      let arr = param.split('=');
      if(arr.length === 2)
        searchData[arr[0]] = arr[1];
    }
  }

  return searchData;
}