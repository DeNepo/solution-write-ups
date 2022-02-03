# Remix x

```js
// 1st Try: use for loop //works
const removeConsecutiveDuplicates1 = s => { 
  const arr = s.split(' ');

  let newArr = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (newArr[newArr.length - 1] !== arr[i]) {
  //       newArr.push(arr[i]); // or
      newArr = newArr.concat([arr[i]]);
    }
  }

  return newArr.join(' ');
};
```


```js 
// 2nd Try: use reduce(newArray, element), if else //works
const removeConsecutiveDuplicates2 = s => { 
  let arr = s.split(' ');

  arr = arr.reduce(
    (newArray, element) => { 
      if(newArray.length===0) {
        newArray.push(element);
      }         
      else {
        if(element!==newArray[newArray.length-1])
          newArray.push(element);  
      }
      return newArray;
    },
    []
  );

  return arr.join(' ');
};

```


```js
// 3rd Try: use reduce(newArray, element) //works
const removeConsecutiveDuplicates3 = s => { 

  let arr = s.split(' ');

  arr = arr.reduce(
    (newArray, element) => {
      if(element!==newArray[newArray.length-1])
        newArray.push(element);  
    return newArray; 
    },
    [arr[0]]
  );

  return arr.join(' ');
};

```


```js
// 4th Try: use reduce(acc, current, index) //works
const removeConsecutiveDuplicates4 = s => { 

  let arr = s.split(' ');

  return arr.reduce(
    (acc, current, index) => {
      if(current!==arr[index-1])
        acc += (' ' + current);
      return acc;
    }
  );
};

```

## Strategy
1) convert the original string to array with each words as element.
2) remove the consecutive duplicate words
3) convert the array with filtered words in to string

## Implementation

## Possible Refactors
- use`reduce((acc, item, i, arr)`, arr is not request, but could be used.
- use `filter((x,i,arr)`, the more parameter the more powerful.
- `replace` with `RegExp`, `RegExp`can shorter the code a lot, but not reader friendly.

## References
[Remove consecutive duplicate words](https://www.codewars.com/kata/5b39e91ee7a2c103300018b3/train/javascript)
