# [challengeName](link-to-challenge)

Creating a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

## Syntax

> addUp(`number`) -> `number`

### Parameters

**num**: `number`

- A positive number

### Return Value:`number`

- A Final value in which all the numbers from 1 to the 'num' are added.
## Test Cases


describe('Basic Tests', () => {
  Test.assertEquals(addUp(3), 6);
  Test.assertEquals(addUp(4), 10);
  Test.assertEquals(addUp(53), 1431);
});

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

## Use Cases

const num = 3;
const result = addUp(num);
console.log(result); // 6
---

## Retrospective

### Continue Doing

- practice more

### Start Doing

- understand the logic and give your own output

### Stop Doing
  - Do not rush into the code. understand first.