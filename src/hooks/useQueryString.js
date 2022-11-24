import { useLocation } from "react-router-dom";

export default function useQueryString() {
  const searchData = { s: '', page: '1' };

  const { search } = useLocation();

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