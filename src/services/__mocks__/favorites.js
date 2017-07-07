const Favorites = jest.genMockFromModule('../favorites').default;

const mockFavorites = [];

Favorites.__setMockFavorites = (favorites) => {
  mockFavorites.concat(favorites)
};

Favorites.prototype.list = () => mockFavorites;

export default Favorites;
