# [challengeName](link-to-challenge)

 A function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10

## Syntax

> addUp(`number`) -> `number`

### Parameters

**paramName**: `number`

Any single positive number

### Return Value: `number`

Expect any positive number between 1 and 1000.

## Test Cases
```
for (const solution of [mySolution]) {
  describe(`${solution.name}: mySolution`, () => {
    describe('add up all the numbers from 1', () => {
      it('if you will pass 4 it should return 10 ', () => {
        expect(solution(10)).toEqual(4);
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
```
## Use Cases

- addUp(4) ➞ 10

- addUp(13) ➞ 91

- addUp(600) ➞ 180300

---

## Retrospective

- I learn how to write test cases for function  
- How to run the test for function

### Continue Doing

- Writhing more tests.

### Start Doing

- Study more different solution which is similar and learn from them.

### Stop Doing

When you able to understand every solution perfectly you can move on
