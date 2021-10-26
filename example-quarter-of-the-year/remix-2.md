# Remix 2

I accidentally wrote this solution studying a tricky one that uses the bitwise
`|` operator, I wanted to understand how it worked. I still don't get exactly
how the `|` operator works but experimenting with little refactors I figured out
that it's like an `||` that somehow rounds decimals to whole numbers. (fun fact,
I didn't use either in my solution.)

It took some experimenting but I eventually saw that the heart of the tricky
solution was actually some simple(ish) math, simpler than the `ldq` solution I'd
studied. After a few more experiments I was able to reduce `zedCwt`'s solution
to a very simple formula that still passes all the tests.

I really don't think I'd have come up with this solution on my own if I hadn't
started with something else to play with. You can see all my experiments in the
sandbox file, look for the `bitwiseOr` function.

```js
// inspiration
const zedCwt = (Q) => 0 | ((2 + Q) / 3);

// my remix
const quarterOf = (month) => Math.ceil(month / 3);

// ldq's fancier math
const ldq = (month) => Math.floor(((month + 11) / 3) % 4) + 1;
```

## Strategy

I accidentally found a very simple math formula to solve this challenge. Because
each quarter is 3 months long, you want every 3 numbers to be grouped together
(1-2-3, 4-5-6, ...). All numbers that should be grouped together will be between
the same whole numbers when you divide by 3:

- **between 0 and 1**: `1/3 -> 0.33`, `2/3 -> 0.66`, `3/3 -> 1`
- **between 1 and 2**: `4/3 -> 1.33`, `5/3 -> 1.66`, `6/3 -> 2`
- ...

So simply dividing a number by 3 and rounding up will give you the correct
quarter!

- **round up to 1**: `0.33 -> 1`, `0.66 -> 1`, `1 -> 1`
- **round up to 2**: `1.33 -> 2`, `1.66 -> 2`, `2 -> 2`
- ...

## Implementation

A simple math formula in an implicit arrow function, the most minimal
implementation I could find.

**`/`**: division

**`Math.ceil`**: rounds a decimal number up to the nearest integer

**`=> with implicit return`**: a simple and short way to write functions

## Possible Refactors

This solution is already as simple as it gets, there's nothing left that _could
be_ removed. Isn't that perfection?

I could add extra variables, use a different type of function, or add in some
checks for edge cases but that would only complicate things.

## References

The editor's autocomplete helped me with the spelling for `Math.ceil`.

I searched for how `|` works, but didn't end up using that operator in my
solution. And anyway none of the links really helped it click for me.

I didn't need any other references! For the first time ever. Just using the
debugger and test cases I was able to make small experiments to existing code
until I found this solution.
