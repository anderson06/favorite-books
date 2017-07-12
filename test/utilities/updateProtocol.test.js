import updateProtocol from '../../src/utilities/updateProtocol';

describe('updateProtocol', () => {
  // small hack to be able to change protocol
  // see https://github.com/facebook/jest/issues/890
  Object.defineProperty(window.location, 'protocol', {
    writable: true,
    value: 'https:'
  });

  it('should convert a url protocol to https when page protocol is https', () => {
    global.document.location.protocol = 'https:';
    const url = 'http://www.mytest.com/image.png';
    const result = updateProtocol(url);
    const expected = 'https://www.mytest.com/image.png';
    expect(result).toEqual(expected);
  });

  it('should convert a url protocol to http when page protocol is http', () => {
    global.document.location.protocol = 'http:';
    const url = 'https://www.mytest.com/image.png';
    const result = updateProtocol(url);
    const expected = 'http://www.mytest.com/image.png';
    expect(result).toEqual(expected);
  });

  it('should return the same url when location and url protocols are both https', () => {
    global.document.location.protocol = 'https:';
    const url = 'https://www.mytest.com/image.png';
    const result = updateProtocol(url);
    expect(result).toEqual(url);
  });

  it('should return the same url when location and url protocols are both http', () => {
    global.document.location.protocol = 'http:';
    const url = 'http://www.mytest.com/image.png';
    const result = updateProtocol(url);
    expect(result).toEqual(url);
  });
});


