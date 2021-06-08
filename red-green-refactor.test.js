import { getName, copyAndPush, capitalizeAndFilter, fetchQuotes } from './red-green-refactor.js';
describe('getName', () => {
  it('returns the name property of an object', () => {
    const spot = { name: 'spot', age: 5, weight: '20 lbs' };
    const name = getName(spot);
    expect(name).toEqual('spot');
  });
});

describe('copyAndPush', () => {
  it('returns a new array with all original items plus an additional item', () => {
    const numbers = [1, 2, 3];
    const newArray = copyAndPush(numbers, 4);
    expect(newArray).toEqual([1, 2, 3, 4]);
  });
});

describe('capitalizeAndFilter', () => {
  it('returns an array of strings with capitalized letters excluding any strings starting with letter f', () => {
    const stringArray = ['the',   'quick', 'brown', 'fox', 'jumps', 'over', 'the',   'lazy', 'dog'
    ];
    const newArray = capitalizeAndFilter(stringArray);
    expect(newArray).toEqual(['THE',   'QUICK', 'BROWN', 'JUMPS', 'OVER', 'THE',   'LAZY', 'DOG']);
  });
});

describe('fetchQuotes', () => {
  it('returns an object with a single quote containing name, text, and image property', async () => {
    const quote = await fetchQuotes(1);

    expect(quote).toEqual(
      {
        name: expect.any(String),
        text: expect.any(String),
        image: expect.any(String)
      }
    );
  });
  

});
