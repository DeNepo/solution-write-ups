'use strict';

const { clear } = require("wd/lib/commands");

/*
param: A number should be entered
return: {returns an int}

This function returns a sum 
*/
function addUp(num) {
  let result = 0;
  for (let i = 1; i <= num; i++) {
    result = result + i;
  }
  return result;
}


for (const solution of [addUp]) {
  describe(`${solution.name}: addUp`, () => {
    describe('Add up the numbers', () => {
      it('1 -> 1', () => expect(solution(1)).toEqual(1));
      it('2 -> 3', () => expect(solution(2)).toEqual(3));
      it('4 -> 10', () => expect(solution(4)).toEqual(10));
      it('13 -> 91', () => expect(solution(13)).toEqual(91));
      it('999 -> 499500', () => expect(solution(999)).toEqual(499500));
      it('23 -> 276', () => expect(solution(23)).toEqual(276));
    });
  });
}
