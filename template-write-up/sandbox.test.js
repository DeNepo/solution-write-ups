'use strict';

function mySolution(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}
/*

*/

for (const solution of [mySolution]) {
  describe(`${solution.name}: mySolution`, () => {
    describe('add up all the numbers from 1', () => {
      it('if you will pass 4 it should return 10 ', () => {
        expect(solution(4)).toEqual(10);
      });
      it('if you will pass 13 it should return 91 ', () => {
        expect(solution(13)).toEqual(91);
      });
      it('if you will pass 600 it should return 180300 ', () => {
        expect(solution(600)).toEqual(180300);
      });
    });
  });
}
