import axios from 'axios';

const RESULTS_PER_PAGE = 10;

export default function getVolumes(searchQuery, page) {
  const url = 'https://www.googleapis.com/books/v1/volumes';
  const startIndex = RESULTS_PER_PAGE * page;
  return axios.get(url, {
    params: {
      q: searchQuery,
      startIndex,
    },
  });
}

