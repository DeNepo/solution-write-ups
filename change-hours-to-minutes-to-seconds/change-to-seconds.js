'use strict';

// this function takes two argument as hours and minutes and converts them to seconds

// declaring the function
function secondsChange(hours, minutes) {
  if (hours < 0) {
    return 'Not a valid number';
  } else if (minutes < 0) {
    return 'Not a valid number';
  } else if (typeof minutes !== 'number') {
    return 'Not a number';
  } else if (typeof hours !== 'number') {
    return 'Not a number';
  } else {
    // declaring a new variable called timeInseconds to hold the convertion
    const timeInSeconds = hours * 60 * 60 + minutes * 60;

    return timeInSeconds;
  }
}
console.log(secondsChange(-4, -1))
export default secondsChange;
