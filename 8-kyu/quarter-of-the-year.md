# [Quarter of the Year](https://www.codewars.com/kata/5ce9c1000bab0b001134f5af)

A year is 12 months long, so can be broken into 4 quarters with 3 months each.  This function determines which of the 4 quarter a month belongs to.

To use this function you represent a month by it's number (ie. January is 1, December is 12), and the function will tell you which quarter it is in by return 1, 2, 3 or 4.

This function could be useful if you are writing an accounting app and needed to create quarterly reports.

## Syntax

> quarterOf(`number`) -> `number`

### Parameters

**month**: `number`

- A number between 1 and 12 representing a month of the year.

### Return Value: `number`

A number between 1 and 4, representing a 3-month period of the year.

## Examples

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
for (let i = 0; i < 12; i++) {
  const expense = monthlyExpenses[i];
  const quarter = quarterOf(i);
  quarterlyExpenses[i] += expense;
}
console.log(quarterlyExpenses); // [59, 5.6, 84, 23]
```

---
---

## [Dannerd](https://www.codewars.com/users/Dannerd)

```js
const quarterOf = month => [1,1,1,1,2,2,2,3,3,3,4,4,4][month]
```

### Strategy

This problem has a small number of possible arguments and return values. Dan chose the strategy of listing all possible solutions and using the argument to determine which value to return.

### Implementation

Dannerd wrote a one-line implementation of his strategy that uses array access to get the correct answer.  The trickiest bit of his implementation is that that his array actually has 13 entries because the first value's index is `0`, not `1`.  He wrote a `1` as the first entry but it could actually be any value because it's never used.

**Arrow function - implicit return**: Dannerd's solution is a single expression so he didn't need a `return` statement.

**Array literal (hard-coded values)**: He hard-coded all the right answers (in order) into an array.

**Array access by index**: Since the parameter is a number, Dan used it as an index to access the correct answer in the array.

### Possible Refactors

This strategy could also be implemented with these Implementation ...

- a long `if else if else` statement
- a long `switch case`,
- an object with key/value pairs to represent the possible correct answers

---

## [ldq](https://www.codewars.com/users/ldq)

```js
const quarterOf = (month) => {
  return Math.floor(((month + 11) / 3) % 4) + 1;
}
```

### Strategy

Ldq approached this problem mathematically.  Rather than selecting from a list of possible answers, they created a formula to calculate the correct value from the argument.

### Implementation

**Math.floor(`number`)**: This function rounds a floating point number down to the nearest integer

**parenthesis**:  As the normal order of operations would not work, ldq used parenthesis to group the mathematical operators differently.

**+, /, %, +**: these operators combine the argument with hard-coded values to calculate the correct solution.

### Possible Refactors

This strategy could also be implemented using these (but not only these) Implementation ...

- an arrow function with implicit return
- bitwise operators (if you want to make your life difficult)
- `Math.ceil` to round up, instead of rounding down

---

## Notes

Studying ldq's solution I finally understood why to use parenthesis, I'd always wondered why you'd need to wrap thing in extra parenthesis.  Experimenting with their solution I found that it only works with the parenthesis like they are. any other way and it doesn't pass the tests.

Statements and expressions also clicked for me.  Studying solutions that do and don't use implicit returns helped to see this.

I'm still struggling to tell the difference between strategy and implementation.  Its hard for me to describe how the problem was solved without mentioning the Implementation that are used.
