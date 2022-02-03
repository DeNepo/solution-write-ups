# [ooflorent](https://www.codewars.com/users/ooflorent)

```js

```

## Strategy

1) create DNA map. use Object key/value pairs.
2) use replace to return a new complementary DNA string and the original string is left unchanged.
3) use regexp as the 1st parameter to target every character of str.
4) specify a replacerFunction as the 2nd parameter. The function will be invoked after the match has been performed. 
5) The function will be invoked multiple times for each full match to be replaced if the regular expression in the first parameter is global.

## Implementation

1) customize an object to build DNA map.
2) use `replace` 
3) use `regexp` as the 1st parameter to target every character of str.
4) specify a `replacerFunction` as the 2nd parameter. The function will be invoked after the match has been performed. 
5) return the complementary DNA string.

## Possible Refactors

- regexp to target 'A', 'T', 'G', 'C' instead of any single character except line terminators.
- ust `map` to create an array of complementary DNA string and `join('')` every single string without space between.



## References

<!--
  links that helped you to understand this solution or to think of possible refactors
-->
