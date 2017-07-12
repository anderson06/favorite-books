export default (url) => {
  const protocol = global.document.location.protocol;
  if (protocol === 'https:') {
    return url.replace('http:', 'https:');
  } else {
    return url.replace('https:', 'http:');
  }
};
