# Remix x

<!--
  which solutions inspired your solution?
  what did you take from each one?
-->

```js
// 1st Try: use for loop //works
function DNAStrand(dna){
  let dnaMap = {
      A: "T",
      T: "A",
      C: "G",
      G: "C"
    };
  let comDNA = "";
  for (key of dna) {
      comDNA += dnaMap[key];
    }
  return comDNA;
  }
```

```js
// 2nd Try: use replace, RegEXP // works
const pairs = {
  A: "T",
  T: "A",
  C: "G",
  G: "C"
};
const DNAStrand= (dna) => {
  return dna.replace( /./g, c => pairs[c])
}
```

## Strategy
1) build DNA map.
2) use key/value pair to get complementary DNA string and then convert characters to final string.
3) return the complementary DNA string.
## Implementation
1) create DNA map. use Object key/value pairs.
2) use replace to return a new complementary DNA string and the original string is left unchanged.
3) use regexp as the 1st parameter to target every character of str.
4) specify a replacerFunction as the 2nd parameter. The function will be invoked after the match has been performed. 
5) The function will be invoked multiple times for each full match to be replaced if the regular expression in the first parameter is global.

## Possible Refactors

- regexp to target 'A', 'T', 'G', 'C' instead of any single character except line terminators.
- ust `map` to create an array of complementary DNA string and `join('')` every single string without space between.

## References
