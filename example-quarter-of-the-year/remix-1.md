# [Remix 1](https://www.codewars.com/users/colevandersWands/completed_solutions)

The solutions I wrote up were interesting, but not something I wanted to write.
[kunaguero](https://www.codewars.com/users/kunaguero)'s solution inspired me.
They used simple conditionals, but unlike other solutions they logged if the
input was invalid if it was not in range. This inspired me to write guards for
the parameters.

```js
const quarterOf = (month) => {
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

  let quarter;
  if (month >= 1 && month <= 3) {
    quarter = 1;
  } else if (month >= 4 && month <= 6) {
    quarter = 2;
  } else if (month >= 7 && month <= 9) {
    quarter = 3;
  } else if (month >= 10 && month <= 12) {
    quarter = 4;
  }

  return quarter;
};
```

## Strategy

I took the less clever and more transparent strategy of checking what range the
month fits in (1-3, 4-6, 7-9, 10-12) and returning the quarter based on this
check.

## Implementation

**`throw new`**: I implemented a type-guards and three range guards. This isn't
required by CodeWars (all test cases are valid), but it helps me understand the
function's behavior and use cases when it's clear what the parameters should be.

**if, else if**: My strategy was all about executing different code for
different inputs. I could have used ternaries, but I think conditionals are
easier to read.

**typeof _ !== _**: I used `typeof` and strict inequality to check the
argument's type

**Number.isInteger**: Since ES6, JS has a built-in method for checking if
something is an integer. nice

**>, <, >=, <=**: For the guards and the main logic, I needed to check what
range the parameter falls into. In the main logic I could have just checked if
the month was less than a number, but I like being able to see the min and max
for each range.

## Possible Refactors

- get rid of the extra guards
- use an else instead of the final if-else
- really, all of the else-ifs could just be if's since each one returns
- have simpler conditional checks in the main logic
- use a big nested ternary, but that can be nasty to read
- use a switch/case, but those can be more difficult to debug

## References

I tried to write my solution using only JS that I already understood, the only
thing I needed to look up was `Number.isInteger`:

- `Number.isInteger`: [StackOverflow](https://stackoverflow.com/a/16476634),
  [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger)
