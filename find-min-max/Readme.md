# [Find min and max values](https://edabit.com/challenge/Q3n42rEWanZSTmsJm)

- This function allows you to find the minimum value and the maximum value of an
  array.

## Syntax

- minMax([]) => {}

## Input

- input is an array consisting of numbers.

## Output/Return value : Numbers

- The minimum value and maximum value of an array

## The code

- `function minMax(arr) { let returnArr = []; let min = arr[0]; let max =
  arr[0]; for (let i = 0; i < arr.length; i++) { if (typeof arr[i] !== 'number')
  { return 'Not a number'; } if (arr[i] < min) { min = arr[i]; } else if
  (arr[i] > max) { max = arr[i]; } } returnArr.push(min); returnArr.push(max);
  return returnArr; }

export default minMax; console.log(minMax([7, 2, 3, 400, 5, 60])); `

## Test cases

- `import minMax from "./find-min-max.js"

test('this function should only accept arrays made of numbers', () => {
expect(minMax([1,2,3,4,5])).toEqual([1,5]);
expect(minMax([1,700,-8,89])).toEqual([-8,700])
expect(minMax([1,"a",6,8,500])).toEqual("Not a number")
expect(minMax([1,2,7,true,8])).toEqual("Not a number")
expect(minMax([1,2.5,9])).toEqual("Not a number"); })`

## Use cases

-This function will take an array of numbers and compare every single array and
return the smallest and the largest number in an array.

- minMax([1,2,3,4,6]) = [1,6]
- minMax([-800,5,79,689]) = [-800, 689]

## Retrospective

- Forsome reason i couldnt use .equals but i could use .toEqual which i didnt
  quite understand why.
- I couldnt figure out how to make sure that if there is a variable in the array
  which is undefined, that it wont break the code.

## Continue doing

- Freecodecamp course
- Youtube coding videos

## Start doing

- Code challenges
- Testing every part of you code
- Mini Projects to get my github profile pumped up

## Stop doing

- Consuming content instead of creating content
- Getting distracted by stuff
