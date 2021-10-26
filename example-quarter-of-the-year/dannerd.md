# [Dannerd](https://www.codewars.com/users/Dannerd)

```js
const quarterOf = (month) => [1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4][month];
```

## Strategy

This problem has a small number of possible arguments and return values. Dan
chose the strategy of listing all possible solutions and using the argument to
determine which value to return.

## Implementation

Dannerd wrote a one-line implementation of his strategy that uses array access
to get the correct answer. The trickiest bit of his implementation is that that
his array actually has 13 entries because the first value's index is `0`, not
`1`. He wrote a `1` as the first entry but it could actually be any value
because it's never used.

**Arrow function - implicit return**: Dannerd's solution is a single expression
so he didn't need a `return` statement.

**Array literal (hard-coded values)**: He hard-coded all the right answers (in
order) into an array.

**Array access by index**: Since the parameter is a number, Dan used it as an
index to access the correct answer in the array.

## Possible Refactors

This strategy could also be implemented with these Implementation ...

- a long `if else if else` statement
- a long `switch case`,
- an object with key/value pairs to represent the possible correct answers

## References

This solution was interesting because of how Dannerd used JS, the only new that
confused me for a minute was the implicit return:

- implicit returns:
  [kbarker.dev](https://kbarker.dev/blog/implicit-return-statements-in-javascript/)
