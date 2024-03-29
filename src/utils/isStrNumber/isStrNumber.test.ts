import { isStrNumber } from '.';

describe('isStrNumber', () => {
  it('return true when the char is a number', () => {
    const result = isStrNumber('123');
    expect(result).toEqual(true);
  });

  it('return false when the char is NOT a number', () => {
    const result = isStrNumber('123abc');
    expect(result).toEqual(false);
  });
});
