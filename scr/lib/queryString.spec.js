const { queryString, parse } = require('./queryString');

describe('Object to query string', () => {
  it('should create a valid query string when an object is provided', () => {
    const object = {
      name: 'Fabio',
      profession: 'developer',
    };
    // queryString(object)
    expect(queryString(object)).toBe('name=Fabio&profession=developer');
  });

  it('should create a valid query string even when an array is passed as value', () => {
    const obj = {
      name: 'Fabio',
      abilities: ['JS', 'TDD'],
    };
    expect(queryString(obj)).toBe('name=Fabio&abilities=JS,TDD');
  });

  it('should throw an error when an object is passed as value', () => {
    const obj = {
      name: 'Fabio',
      abilities: {
        first: 'JS',
        second: 'TDD',
      },
    };

    expect(() => queryString(obj)).toThrowError();
  });
});

describe('Object to query string', () => {
  it('should convert a query string to object', () => {
    const queryString = 'name=Fabio&profession=developer';
    expect(parse(queryString)).toEqual({
      name: 'Fabio',
      profession: 'developer',
    });
  });

  it('should convert a query string of a single-key to object', () => {
    const queryString = 'name=Fabio';
    expect(parse(queryString)).toEqual({
      name: 'Fabio',
    });
  });

  it('should convert a query string of a object taking care of comma separated values', () => {
    const queryString = 'name=Fabio&abilities=JS,TDD';
    expect(parse(queryString)).toEqual({
      name: 'Fabio',
      abilities: ['JS', 'TDD'],
    });
  });
});
