const faker = require('faker');

export function aVolume() {
  return {
    id: faker.random.alphaNumeric(),
    title: faker.lorem.sentence(),
    description: faker.lorem.paragraph(),
    thumbnail: faker.image.imageUrl()
  };
}

export function aVolumeWith(override) {
  return Object.assign(volume(), override);
}
