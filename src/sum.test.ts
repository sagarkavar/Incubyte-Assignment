import { sum } from './sum';

describe('sum function testcases', () => {
  it('should return 3 for 1 + 2', () => {
    expect(sum(1, 2)).toBe(3);
  });
})
