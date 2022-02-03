# [Remove consecutive duplicate words](https://www.codewars.com/kata/5b39e91ee7a2c103300018b3/train/javascript)

<!--
Remove consecutive duplicate words
Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. 

@param {String} [str=[]] - The string to inspect.
@returns {String} Returns the new string of filtered values.
@example

const str = "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

removeConsecutiveDuplicates(str); // "alpha beta gamma delta alpha beta gamma delta"

-->


## Syntax

> removeConsecutiveDuplicates(`string`) -> `string`

### Parameters

**str**: `string`

- The string to inspect.

### Return Value: `string`

- Returns the new string of filtered values.

## Test Cases

- Sample tests from CodeWars:

```js
// directly from CodeWars
describe('Example tests', () => {
  it('should handle example case', () => {
    Test.assertEquals(removeConsecutiveDuplicates('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'), 'alpha beta gamma delta alpha beta gamma delta');
  });
});
```

- My tests from the sandbox:

```js
describe(`${solution.name}: Remove consecutive duplicate words`, () => {
/*     describe('has default argument', () => {
      it('should return an empty string', () => {
        const actual = solution();
        const expected = "";
        expect(actual).toEqual(expected);
      });
    }); */
    describe('standard words string', () => {
      it('return a string with no consecutive duplicated words', () => {
        const str = 'apple apple banana banana orange'
        const actual = solution(str);
        const expected = 'apple banana orange';
        expect(actual).toEqual(expected);
      });
      it('a string with no consecutive duplicated words', () => {
        const str = 'app app banana banana orange '
        const actual = solution(str);
        const expected = 'app banana orange ';
        expect(actual).toEqual(expected);
      });
      it('_', () => {
        const str = 'apple apple banana banana orange apple'
        const actual = solution(str);
        const expected = 'apple banana orange apple';
        expect(actual).toEqual(expected);
      });
    });

    describe('string with not real words', () => {
      it('return a string with no consecutive duplicated words', () => {
        const str = 'a?le a?le banana banana orange'
        const actual = solution(str);
        const expected = 'a?le banana orange';
        expect(actual).toEqual(expected);
      });
      it('output a string with no consecutive duplicated words', () => {
        const str = 'a!p a!p ban.na ban.na orange'
        const actual = solution(str);
        const expected = 'a!p ban.na orange';
        expect(actual).toEqual(expected);
      });
    });
  });
```

## Use Cases 

<!--
  write a minimum of 2 use cases to show this functions behavior.

  try to find interesting _edge cases_, it's good for you ;)
  an edge case is when a function behaves different than you'd expect.
  This will help you and others better understand the function.

  https://www.geeksforgeeks.org/dont-forget-edge-cases/
-->

<!--  copy #to do
```js
const june = 6;
const juneQuarter = quarterOf(june);
console.log(juneQuarter); // 2
```

The first third quarter month:

```js
const july = 7;
const julyQuarter = quarterOf(july);
console.log(julyQuarter); // 3
``` 
-->

## Retrospective

<!--
  write any notes to help you review this exercise later, and to help others' study it.

  this might include:

  - good ideas to use later in your own code
  - less good ideas to avoid in your own code
  - new vocabulary you learned
  - the most important thing(s) you learned
  - something that you still don't understand but want to keep studying
  - something that surprised you
  - tricks you will want to remember and use later
-->

<!-- copy from example # to do
Studying ldq's solution I finally understood why to use parenthesis, I'd always
wondered why you'd need to wrap thing in extra parenthesis. Experimenting with
their solution I found that it only works with the parenthesis like they are.
any other way and it doesn't pass the tests. (order of operations!)

Statements and expressions also clicked for me. Studying solutions that do and
don't use implicit returns helped to see this.

I'm still struggling to tell the difference between strategy and implementation.
Its hard for me to describe how the problem was solved without mentioning the
implementation.
 -->

### Continue Doing

<!-- copy from example # to do
- Many experimental refactors of each solution I studied, this helped a lot with
  `remix-2.md`
- Writing extra test cases
 -->

### Start Doing

<!-- copy from example # to do
- Study more solutions that look very similar, there's a lot to learn from the
  small differences.
- Rename all the variables in functions when I start studying them, I think this
  could help inspire new remixes
- Step through the code many different ways: debugger, JS Tutor, drawing on it,
  trace tables.
 -->

### Stop Doing

<!-- # to do
- Expecting to understand every solution perfectly, I learned a lot from
  studying `zedCwt` without understanding how `|` works.
 -->
