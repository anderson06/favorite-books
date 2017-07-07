import faker from 'faker';
import parseVolume from '../../src/utilities/parseVolume';

describe('parseVolume', () => {
  let id;
  let title;
  let thumbnail;
  let description;

  beforeEach(() => {
    id = faker.random.uuid();
    title = faker.lorem.sentence();
    thumbnail = faker.image.imageUrl();
    description = faker.lorem.paragraph();
  });

  it('should parse volumes endpoint data', () => {
    const fakeVolume = {
      id,
      volumeInfo: {
        title,
        description,
        imageLinks: { thumbnail },
      },
    };
    const actual = parseVolume(fakeVolume);
    const expected = {
      id,
      title,
      thumbnail,
      description,
    };
    expect(actual).toEqual(expected);
  });

  it('should handle a missing thumbnail', () => {
    const noThumbnailVolume = {
      id,
      volumeInfo: {
        title,
        description,
        imageLinks: {},
      },
    };
    const actual = parseVolume(noThumbnailVolume);
    const expected = {
      id,
      title,
      description,
    };
    expect(actual).toEqual(expected);
  });
});

