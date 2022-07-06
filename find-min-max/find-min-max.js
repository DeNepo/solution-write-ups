function minMax(arr) {
  let returnArr = [];
  let min = arr[0];
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {
      return 'Not a number';
    }
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr[i];
    }
  }
  returnArr.push(min);
  returnArr.push(max);
  return returnArr;
}

export default minMax;
console.log(minMax([7, 2, 3, 400, 5, 60]));
