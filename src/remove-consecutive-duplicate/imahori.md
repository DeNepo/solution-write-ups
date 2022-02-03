# [Imahori](https://www.codewars.com/users/Imahori/stats)

```js
const removeConsecutiveDuplicates01 = s => s.split(" ").filter((x,i,arr) => x!=arr[i-1]).join(" ");

```

## Strategy

1) convert the original string to array with each words as element.
2) use filter remove the consecutive duplicate words
3) convert the array with filtered words in to string

## Implementation

1) use `split` convert the string to an array;
2) use `filter((x,i,arr)` to remove the consecutive duplicate words. The high light is using index to target the current element and the element before current.
3) use `join(" ")`to convert the array with filtered words in to string.

## Possible Refactors

This strategy could also be implemented with these Implementation ...

- `reduce` method
- `replace` with `RegExp`

## References

[Remove consecutive duplicate words](https://www.codewars.com/kata/5b39e91ee7a2c103300018b3/train/javascript)
