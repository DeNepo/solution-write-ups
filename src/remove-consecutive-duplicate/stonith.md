# [stonith](https://www.codewars.com/users/stonith)

```js
const removeConsecutiveDuplicates02 = s => s.replace(/\b(\w+)(?: \1)+\b/g, '$1');
```

## Strategy

1) target consecutive duplicated words.
2) replace target with the specific word unit.

## Implementation

1) group a word unit. use`\w`
2) group a consecutive duplicated words section. Each word separated with space.
3) replace the section with the word unit.

## Possible Refactors

-  group a word unit. use`\S`, some weird spelling, not from a real word, will included.

## References

[Remove consecutive duplicate words](https://www.codewars.com/kata/5b39e91ee7a2c103300018b3/train/javascript)
