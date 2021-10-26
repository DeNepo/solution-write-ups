# [ldq](https://www.codewars.com/users/ldq)

```js
const quarterOf = (month) => {
  return Math.floor(((month + 11) / 3) % 4) + 1;
};
```

## Strategy

Ldq approached this problem mathematically. Rather than selecting from a list of
possible answers, they created a formula to calculate the correct value from the
argument.

## Implementation

**Math.floor(`number`)**: This function rounds a floating point number down to
the nearest integer

**parenthesis**: As the normal order of operations would not work, ldq used
parenthesis to group the mathematical operators differently.

**+, /, %, +**: these operators combine the argument with hard-coded values to
calculate the correct solution.

## Possible Refactors

This strategy could also be implemented using these (but not only these)
Implementation ...

- an arrow function with implicit return
- bitwise operators (if you want to make your life difficult)
- `Math.ceil` to round up, instead of rounding down

## References

For ldq's solution I needed to review operator precedence and look up how
`Math.floor` works.

- operator precedence:
  [scriptingmaster](http://www.scriptingmaster.com/javascript/operator-precedence.asp),
  [Avelx, BOMDAS](https://www.youtube.com/watch?v=v-L5v6GEFcY),
  [GreeneMath](https://www.youtube.com/watch?v=XI2KKC_7FAM)
- `Math.floor`:
  [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)
