# [Quarter of the Year](https://www.codewars.com/kata/5ce9c1000bab0b001134f5af)

A year is 12 months long, so can be broken into 4 quarters with 3 months each. This function determines which of the 4 quarter a month belongs to.

To use this function you represent a month by it's number (ie. January is 1, December is 12), and the function will tell you which quarter it is in by return 1, 2, 3 or 4.

This function could be useful if you are writing an accounting app and needed to create quarterly reports.

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

> Notice! The examples should not include the source code for your solution or someone else's. Examples show how to _call_ the function in a realistic(ish) setting.

This function's behavior is relatively simple to understand. This exercise didn't include complicated edge cases so there are only 12 possible examples. I chose two that show the transition from one quarter to the next

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

---

## [Dannerd](https://www.codewars.com/users/Dannerd)

```js
const quarterOf = month => [1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4][month];
```

### Strategy

This problem has a small number of possible arguments and return values. Dan chose the strategy of listing all possible solutions and using the argument to determine which value to return.

### Implementation

Dannerd wrote a one-line implementation of his strategy that uses array access to get the correct answer. The trickiest bit of his implementation is that that his array actually has 13 entries because the first value's index is `0`, not `1`. He wrote a `1` as the first entry but it could actually be any value because it's never used.

**Arrow function - implicit return**: Dannerd's solution is a single expression so he didn't need a `return` statement.

**Array literal (hard-coded values)**: He hard-coded all the right answers (in order) into an array.

**Array access by index**: Since the parameter is a number, Dan used it as an index to access the correct answer in the array.

### Possible Refactors

This strategy could also be implemented with these Implementation ...

- a long `if else if else` statement
- a long `switch case`,
- an object with key/value pairs to represent the possible correct answers

### References

This solution was interesting because of how Dannerd used JS, the only new that confused me for a minute was the implicit return:

- implicit returns: [kbarker.dev](https://kbarker.dev/blog/implicit-return-statements-in-javascript/)

---

## [ldq](https://www.codewars.com/users/ldq)

```js
const quarterOf = month => {
  return Math.floor(((month + 11) / 3) % 4) + 1;
};
```

### Strategy

Ldq approached this problem mathematically. Rather than selecting from a list of possible answers, they created a formula to calculate the correct value from the argument.

### Implementation

**Math.floor(`number`)**: This function rounds a floating point number down to the nearest integer

**parenthesis**: As the normal order of operations would not work, ldq used parenthesis to group the mathematical operators differently.

**+, /, %, +**: these operators combine the argument with hard-coded values to calculate the correct solution.

### Possible Refactors

This strategy could also be implemented using these (but not only these) Implementation ...

- an arrow function with implicit return
- bitwise operators (if you want to make your life difficult)
- `Math.ceil` to round up, instead of rounding down

### References

For ldq's solution I needed to review operator precedence and look up how `Math.floor` works.

- operator precedence: [scriptingmaster](http://www.scriptingmaster.com/javascript/operator-precedence.asp), [Avelx, BOMDAS](https://www.youtube.com/watch?v=v-L5v6GEFcY), [GreeneMath](https://www.youtube.com/watch?v=XI2KKC_7FAM)
- `Math.floor`: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)

---

### [My Solution](https://www.codewars.com/users/colevandersWands/completed_solutions)

```js
const quarterOf = month => {
  if (typeof month !== 'number') {
    throw new TypeError('month is not a number');
  }
  if (!Number.isInteger(month)) {
    throw new RangeError('month is not an integer');
  }
  if (month < 1) {
    throw new RangeError('month is less than 1');
  }
  if (month > 12) {
    throw new RangeError('month is greater than 12');
  }

  if (month >= 1 && month <= 3) {
    return 1;
  } else if (month >= 4 && month <= 6) {
    return 2;
  } else if (month >= 7 && month <= 9) {
    return 3;
  } else if (month >= 10 && month <= 12) {
    return 4;
  }
};
```

### Strategy

I took the less clever and more transparent strategy of checking what range the month fits in (1-3, 4-6, 7-9, 10-12) and returning the quarter based on this check.

### Implementation

**`throw new`**: I implemented a type-guards and three range guards. This isn't required by CodeWars (all test cases are valid), but it helps me understand the function's behavior and use cases when it's clear what the parameters should be.

**if, else if**: My strategy was all about executing different code for different inputs. I could have used ternaries, but I think conditionals are easier to read.

**typeof _ !== _**: I used `typeof` and strict inequality to check the argument's type

**Number.isInteger**: Since ES6, JS has a built-in method for checking if something is an integer. nice

**>, <, >=, <=**: For the guards and the main logic, I needed to check what range the parameter falls into. In the main logic I could have just checked if the month was less than a number, but I like being able to see the min and max for each range.

### Possible Refactors

- get rid of the extra guards
- use an else instead of the final if-else
- really, all of the else-ifs could just be if's since each one returns
- have simpler conditional checks in the main logic
- use a big nested ternary, but that can be nasty to read
- use a switch/case, but those can be more difficult to debug

### Inspired By

The solutions I wrote up were interesting, but not something I wanted to write. [kunaguero](https://www.codewars.com/users/kunaguero)'s solution inspired me. They used simple conditionals, but unlike other solutions they logged if the input was invalid if it was not in range. This inspired me to write guards for the parameters.

### References

I tried to write my solution using only JS that I already understood, the only thing I needed to look up was `Number.isInteger`:

- `Number.isInteger`: [StackOverflow](https://stackoverflow.com/a/16476634), [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger)

---

## Retrospective

Studying ldq's solution I finally understood why to use parenthesis, I'd always wondered why you'd need to wrap thing in extra parenthesis. Experimenting with their solution I found that it only works with the parenthesis like they are. any other way and it doesn't pass the tests. (order of operations!)

Statements and expressions also clicked for me. Studying solutions that do and don't use implicit returns helped to see this.

I'm still struggling to tell the difference between strategy and implementation. Its hard for me to describe how the problem was solved without mentioning the Implementation that are used.
