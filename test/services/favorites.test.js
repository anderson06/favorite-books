import faker from 'faker';
import Favorites from '../../src/services/favorites';

describe('favorites', () => {
  it('start with an empty list of favorites', () => {
    const favorites = new Favorites();
    const actual = favorites.all();;
    const expected = [];
    expect(actual).toEqual(expected);
  });

  it('should be able to add favorites', () => {
    const favorites = new Favorites();
    const favorite = { id: faker.random.uuid() };
    favorites.add(favorite);
    const favoritesList = favorites.all();
    expect(favoritesList).toContain(favorite);
  });

  describe('isFavorite', () => {
    let favorites, favorite;

    beforeEach(() => {
      favorites = new Favorites();
      favorite = { id: '000' };
      favorites.add(favorite);
    });

    it('should return true for favorite', () => {
      const actual = favorites.isFavorite(favorite);
      const expected = true;
      expect(actual).toBe(expected);
    });

    it('should return false for non favorite', () => {
      const actual = favorites.isFavorite({ id: '111' });
      const expected = false;
      expect(actual).toBe(expected);
    });

    it('should return false for non valid parameters', () => {
      expect(favorites.isFavorite()).toBe(false);
      expect(favorites.isFavorite({})).toBe(false);
    });
  });

  describe('toggle', () => {
    let favorites, favorite;

    beforeEach(() => {
      favorites = new Favorites();
      favorite = { id: '000' };
      favorites.add(favorite);
    });

    it('should add when it is not a favorite yet', () => {
      const otherFavorite = { id: '111' };
      favorites.toggle(otherFavorite);
      expect(favorites.isFavorite(otherFavorite)).toBe(true);
    });
  });

  describe('subscribe', () => {
    it('should call subscribed callback on new favorite', () => {
      const favorites = new Favorites();
      const subscribed = jest.fn();
      favorites.subscribe(subscribed);
      const favorite = { id: faker.random.uuid() };
      favorites.add(favorite);
      expect(subscribed).toHaveBeenCalledTimes(1);
    });
  });
});

