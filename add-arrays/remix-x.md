# Remix x

This is my solution. I choose pretty simple way)

```js
function addArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    throw new Error("You done goof'd");
  }
  const sum = [];
  for (let i = 0; i < arr1.length; i++) {
    sum.push(arr1[i] + arr2[i]);
  }
  return sum;
}

```

Be honest i decide to push into new array as its really simple and understandable
solution which also avoid side effects as push result directly to the new array.

## Strategy

## Implementation

I use this method as it was clear for me and i decide to spend more time for
others methods to study

## Possible Refactors

As i choose the most siple but at the same time more longer code for refactoring
 we can use map() or reduce method

## References
