import store from '../../src/utilities/store';

describe('store', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should add a list of objects to localStorage', () => {
    const objectsList = [{ some: 'value' }];
    store('namespace', objectsList);
    const rawStoragedList = global.localStorage.getItem('namespace');
    const storagedList = JSON.parse(rawStoragedList);
    expect(storagedList).toEqual(objectsList);
  });

  it('should retrieve a list of objects from localStorage', () => {
    const objectsList = [{ some: 'value' }];
    store('namespace', objectsList);
    const storagedList = store('namespace');
    expect(storagedList).toEqual(objectsList);
  });
});

