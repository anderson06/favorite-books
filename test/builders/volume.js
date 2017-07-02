const faker = require('faker');

export function volume() {
  return {
    id: faker.random.alphaNumeric(),
    title: faker.lorem.sentence(),
    description: faker.lorem.paragraph(),
    thumbnail: faker.image.imageUrl()
  };
}

export function volumeWith(override) {
  return Object.assign(volume(), override);
}
