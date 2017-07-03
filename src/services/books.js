import axios from 'axios';

export default function getVolumes(searchQuery) {
  const url = 'https://www.googleapis.com/books/v1/volumes';
  return axios.get(url, {
    params: {
      q: searchQuery,
    },
  });
}

