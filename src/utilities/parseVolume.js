export default (item) => {
  const volume = {
    id: item.id,
    title: item.volumeInfo.title,
    description: item.volumeInfo.description,
  };
  if (item.volumeInfo.imageLinks) {
    volume.thumbnail = item.volumeInfo.imageLinks.thumbnail;
  }
  return volume;
};
