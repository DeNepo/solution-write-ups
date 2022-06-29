'use strict';

/**
 * AddArrays() adding elements from arrays with equal length
 * param1 [arr1] -> string or number
 * param2 [arr2] -> string or number
 * return [newArray] -> the sum of arrays elements (number or string).
 */

function addArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    throw new Error("You done goof'd");
  }
  const sum = [];
  for (let i = 0; i < arr1.length; i++) {
    sum.push(arr1[i] + arr2[i]);
  }
  return sum;
}

function addArrays1(a1, a2) {
  if (a1.length !== a2.length) throw new Error();
  return a1.map((v, i) => v + a2[i]);
}

const addArrays2 = (arr1, arr2) => {
  if (arr1.length !== arr2.length) throw 'Error';
  return arr1.map((_, i) => arr1[i] + arr2[i]);
};

function addArrays3(array1, array2) {
  if (array1.length !== array2.length) {
    throw new Error('Array lengths not same size');
  }

  return array1.reduce((arr, num, i) => {
    arr.push(num + array2[i]);

    return arr;
  }, []);
}

for (const solution of [addArrays, addArrays1, addArrays2, addArrays3]) {
  describe(`${solution.name}: addArrays`, () => {
    describe('add elements from different arrays and push them to the new array ', () => {
      it('add two numbers from different arrays and push to the new array', () => {
        expect(solution([2, 3], [0, 4])).toEqual([2, 7]);
      });
      it('add string from different arrays and push to the new array', () => {
        expect(solution(['a', 'b'], ['c', 'd'])).toEqual(['ac', 'bd']);
      });
      it('add string and number and we should receive string in new array', () => {
        expect(solution(['a', 'b'], [1, 2])).toEqual(['a1', 'b2']);
      });
      it('add string and empty string and we should receive string in new array', () => {
        expect(solution(['a', 'b'], ['', ''])).toEqual(['a', 'b']);
      });
      describe('when arrays have different length it should throw error', () => {
        it('arrays have different length', () => {
          expect(solution(['a', 'b'], ['a', 'b', 'c'])).toThrowNewError('Arrays should have same length');
        });
      });
    });
  });
}
