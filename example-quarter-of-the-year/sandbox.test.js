'use strict';

/* Quarter of the year

  thoughts ... notes ...

*/

const ldq = (month) => {
  // return Math.floor(((month + 11) / 3) % 4) + 1;

  // const step1 = month + 11;
  // return Math.floor(((step1) / 3) % 4) + 1;

  // const step1 = month + 11;
  // const step2 = ((step1) / 3);
  // return Math.floor(step2 % 4) + 1;

  // const step1 = month + 11;
  // const step2 = ((step1) / 3);
  // const step3 = step2 % 4;
  // return Math.floor(step3) + 1;

  const step1 = month + 11;
  const step2 = step1 / 3;
  const step3 = step2 % 4;
  const step4 = Math.floor(step3);
  return step4 + 1;
};

// ---

// this one is a lot like ldq, but with an object instead of an array
// const quarterOf = (month) => {
//   return {
//     1: 1, 2: 1, 3: 1,
//     4: 2, 5: 2, 6: 2,
//     7: 3, 8: 3, 9: 3,
//     10: 4, 11: 4, 12: 4
//   }[month + '']
// }
const abdullaachilov = (month) => {
  const quartersObject = {
    // quarter 1, the first three month keys have the same value
    1: 1,
    2: 1,
    3: 1,
    // quarter 2, same with this quarter
    4: 2,
    5: 2,
    6: 2,
    // quarter 3, ...
    7: 3,
    8: 3,
    9: 3,
    // quarter 4
    10: 4,
    11: 4,
    12: 4,
  };
  // step-by-step, it's just object key/value access
  const monthAsStringKey = String(month);
  const thisQuarter = quartersObject[monthAsStringKey];
  return thisQuarter;
};

// const quarterOf = month => [1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4][month]
const dannerd = (month) => {
  // easier to read
  const quartersArray = [1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4];
  const thisQuarter = quartersArray[month];
  return thisQuarter;
};
// the array version of abdullaachilov's solution

// ---

// dream-ardor
// const quarterOf = m => m == 1 || m == 2 || m == 3 ? 1 : m == 4 || m == 5 || m == 6 ? 2 : m == 7 || m == 8 || m == 9 ? 3 : 4;
const dreamArdor = (month) => {
  // rewriting so it's easier to read
  return month == 1 || month == 2 || month == 3
    ? 1
    : month == 4 || month == 5 || month == 6
    ? 2
    : month == 7 || month == 8 || month == 9
    ? 3
    : 4;
};

// ---

// these three look similar but I do not understand them
// they all use the | operator, what?

const linisnie = (m) => (m / 3 + 0.7) | 0;

const zedCwt = (Q) => 0 | ((2 + Q) / 3);

const visph = (m) => ((--m / 3) | 0) + 1;

// ----

const olderMySolution = (month) => {
  if (typeof month !== 'number') {
    throw new TypeError('month is not a number');
  }
  if (month < 1) {
    throw new RangeError('month is less than 1');
  }
  if (month > 12) {
    throw new RangeError('month is greater than 12');
  }

  let quarter;
  if (month >= 1 && month <= 3) {
    quarter = 1;
  } else if (month >= 4 && month <= 6) {
    quarter = 2;
  } else if (month >= 7 && month <= 9) {
    quarter = 3;
  } else {
    quarter = 4;
  }

  return quarter;
};

// trying to understand this one:
//  const zedCwt = (Q) => 0 | ((2 + Q) / 3);
const bitwiseOr = (month) => {
  // return 0 | ((2 + month) / 3);

  // try replacing | with ||
  //  this passes the tests for 1, 4, 7, 10
  //  the other numbers come out as decimals
  //  the bitwise operator seems to round the number to an integer?
  // return 0 || (2 + month) / 3;

  // try rounding the numbers myself
  //  passes 1,2, 4,5, 7,8, 10,11
  //  the failing tests were all off by 1
  // return 0 || Math.round((2 + month) / 3);

  // try rounding the numbers down instead
  //  success!
  // return 0 || Math.floor((2 + month) / 3);

  // remove 0 and ||, there is no test case for 0. it's just extra?
  //  success!
  // return Math.floor((2 + month) / 3);

  // adding 2 then down up seems like double work
  //  maybe rounding up can remove the extra math?
  //  success!
  return Math.ceil(month / 3);
};

// ---

for (const solution of [
  // dannerd,
  // abdullaachilov,
  // ldq,
  // linisnie,
  // zedCwt,
  // visph,
  // olderMySolution,
  bitwiseOr,
]) {
  describe(solution.name + ': quarter of the year', () => {
    describe('the numbers 1 to 12', () => {
      it('1 -> 1', () => expect(solution(1)).toEqual(1));
      it('2 -> 1', () => expect(solution(2)).toEqual(1));
      it('3 -> 1', () => expect(solution(3)).toEqual(1));
      it('4 -> 2', () => expect(solution(4)).toEqual(2));
      it('5 -> 2', () => expect(solution(5)).toEqual(2));
      it('6 -> 2', () => expect(solution(6)).toEqual(2));
      it('7 -> 3', () => expect(solution(7)).toEqual(3));
      it('8 -> 3', () => expect(solution(8)).toEqual(3));
      it('9 -> 3', () => expect(solution(9)).toEqual(3));
      it('10 -> 4', () => expect(solution(10)).toEqual(4));
      it('11 -> 4', () => expect(solution(11)).toEqual(4));
      it('12 -> 4', () => expect(solution(12)).toEqual(4));
    });
  });
}
