import faker from 'faker';
import Favorites from '../../src/services/favorites';

describe('favorites', () => {
  let favorites, favorite;

  beforeEach(() => {
    favorites = new Favorites();
    favorite = { id: '000' };
  });

  it('start with an empty list of favorites', () => {
    const actual = favorites.all();;
    const expected = [];
    expect(actual).toEqual(expected);
  });

  it('should be able to add favorites', () => {
    favorites.add(favorite);
    const favoritesList = favorites.all();
    expect(favoritesList).toContain(favorite);
  });

  describe('isFavorite', () => {
    beforeEach(() => {
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
    beforeEach(() => {
      favorites.add(favorite);
    });

    it('should add when it is not a favorite yet', () => {
      const otherFavorite = { id: '111' };
      favorites.toggle(otherFavorite);
      expect(favorites.isFavorite(otherFavorite)).toBe(true);
    });

    it('should remove when it is already a favorite', () => {
      favorites.toggle(favorite);
      expect(favorites.isFavorite(favorite)).toBe(false);
    });
  });

  describe('subscribe', () => {
    let subscribed;

    beforeEach(() => {
      subscribed = jest.fn();
      favorites.subscribe(subscribed);
    });

    it('should call subscribed callback on new favorite', () => {
      favorites.add(favorite);
      expect(subscribed).toHaveBeenCalledTimes(1);
    });

    it('should call subscribed callback when a favorite is removed', () => {
      favorites.add(favorite);
      favorites.remove(favorite);
      expect(subscribed).toHaveBeenCalledTimes(2);
    });
  });
});

