import React from 'react';
import * as diacritics from 'diacritics';

export default (query, text) => {
  if (!query || !text) {
    return text;
  }
  const searchText = diacritics.remove(text.toLowerCase());
  const searchQuery = diacritics.remove(query.toLowerCase());
  const start = searchText.indexOf(searchQuery);
  const end = start + query.length;
  if (start === -1) {
    return text;
  }
  return (
    <span>
      {text.substring(0, start)}
      <span className="highlight">{text.substring(start, end)}</span>
      {text.substring(end, text.length)}
    </span>
  );
};
