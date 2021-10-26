# [Quarter of the Year](https://www.codewars.com/kata/5ce9c1000bab0b001134f5af)

A year is 12 months long, so can be broken into 4 quarters with 3 months each.
This function determines which of the 4 quarter a month belongs to.

To use this function you represent a month by it's number (ie. January is 1,
December is 12), and the function will tell you which quarter it is in by return
1, 2, 3 or 4.

This function could be useful if you are writing an accounting app and needed to
create quarterly reports.

## Syntax

> quarterOf(`number`) -> `number`

### Parameters

**month**: `number`

- A number between 1 and 12 representing a month of the year.

### Return Value: `number`

A number between 1 and 4, representing a 3-month period of the year.

## Test Cases

Sample tests from CodeWars:

```js
// directly from CodeWars
describe('Basic Tests', () => {
  Test.assertEquals(quarterOf(3), 1);
  Test.assertEquals(quarterOf(8), 3);
  Test.assertEquals(quarterOf(11), 4);
});

// refactored to use describe/it/expect (what you will be learning at HYF)
describe('Basic Tests', () => {
  it('should return 1 when 3 is passed', () => {
    expect(quarterOf(3)).toEqual(1);
  });
  it('should return 3 when 8 is passed', () => {
    expect(quarterOf(8)).toEqual(3);
  });
  it('should return 4 when 11 is passed', () => {
    expect(quarterOf(11)).toEqual(4);
  });
});
```

My tests from the sandbox:

```js
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
```

## Use Cases

> Notice! The examples should not include the source code for your solution or
> someone else's. Examples show how to _call_ the function in a realistic(ish)
> setting.

This function's behavior is relatively simple to understand. This exercise
didn't include complicated edge cases so there are only 12 possible examples. I
chose two that show the transition from one quarter to the next

The last second quarter month:

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

Calculating expenses for each quarter of the year:

```js
const monthlyExpenses = [12, 42, 5, 0, 2, 3.6, 1, 0, 83, 9, 10, 4];
const quarterlyExpenses = [0, 0, 0, 0];
for (let i = 1; i <= 12; i++) {
  const expense = monthlyExpenses[i - 1];
  const quarter = solution(i);
  quarterlyExpenses[quarter - 1] += expense;
}
console.log(quarterlyExpenses); // [59, 5.6, 84, 23]
```

---

## Retrospective

Studying ldq's solution I finally understood why to use parenthesis, I'd always
wondered why you'd need to wrap thing in extra parenthesis. Experimenting with
their solution I found that it only works with the parenthesis like they are.
any other way and it doesn't pass the tests. (order of operations!)

Statements and expressions also clicked for me. Studying solutions that do and
don't use implicit returns helped to see this.

I'm still struggling to tell the difference between strategy and implementation.
Its hard for me to describe how the problem was solved without mentioning the
implementation.

### Continue Doing

- Many experimental refactors of each solution I studied, this helped a lot with
  `remix-2.md`
- Writing extra test cases

### Start Doing

- Study more solutions that look very similar, there's a lot to learn from the
  small differences.
- Rename all the variables in functions when I start studying them, I think this
  could help inspire new remixes
- Step through the code many different ways: debugger, JS Tutor, drawing on it,
  trace tables.

### Stop Doing

- Expecting to understand every solution perfectly, I learned a lot from
  studying `zedCwt` without understanding how `|` works.
