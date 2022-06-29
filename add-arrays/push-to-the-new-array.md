# [addArrays](link-to-challenge)

This function takes two elements (string or numbers) from two different arrays with
 same length  and push them to the new array

## Syntax

> addArrays(`array1`, `array2`) -> `newArray`

### Parameters

**paramName**: array1 `number` or `string`
array2 `number` or `string`

Any single positive number

### Return Value: `newArray`

Expect new array with `string` or `number`

## Test Cases

### My test

```js
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
      describe('if arrays has different length  ', () => {
       it('add string and empty string and we should receive string in new array', () => {
         expect(solution(['a', 'b'], ['a', 'b', 'c'])).toThrowError();
       });
    });
  });
```

### Tests from example

```js
describe('testing addArrays()', function () {
  it('should properly handle example test case', function () {
    Test.assertSimilar(addArrays([1, 2], [4, 5]), [5, 7]);
    Test.assertSimilar(
      addArrays(['a'], ['b']),
      ['ab'],
      'Should work with strings as well'
    );
  });

  it('should raise error with improper array length input', function () {
    Test.expectError(
      'Should raise an error when arguments are of varying length',
      function () {
        addArrays([1, 2, 3], [4, 5]);
      }
    );
    Test.expectError(
      'Should raise an error when arguments are of varying length',
      function () {
        addArrays([1], [4, 5]);
      }
    );
  });

  it('should accept empty arrays', function () {
    Test.assertSimilar(
      addArrays([], []),
      [],
      'Should allow for empty arrays as input'
    );
    Test.expectNoError(function () {
      addArrays([], []);
    });
  });

  it('should properly handle random arrays of integers', function () {
    let input1, input2, answer, output;
    let counter = 10;
    while (counter > 0) {
      input1 = randomArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
      input2 = randomArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
      answer = mySol(input1, input2);
      output = addArrays(input1, input2);
      Test.assertSimilar(answer, output);
      counter--;
    }
  });
```

## Use Cases

Array can contain different types of data but in my test first i check for the `string`

```js

arr1 = ['a', 'b'];
arr2 = ['c', 'd'];
newArray = [];
console.log(newArray(arr1[i] + arr2[2])); // 'ac', 'bd'

```

If arrays has different length its should thrown Error

```js
arr1 = [1, 2];
arr2 = [1, 2, 3];
console.log(newArray(arr1[i], arr2[i])); // Error ('Arrays length should be the same)
```

## Retrospective

- I learn how to write test cases for function  
- How to run the test for function
- The other solution help to better understand how function is work

### Continue Doing

- Writhing more tests.
- Find and check more solution for same challenges
- Reading md files with examples in GitHub

### Start Doing

- Study more different solution which is similar and learn from them.
- Don't spend to much time for one solution

### Stop Doing

When you able to understand every solution perfectly you can move on
