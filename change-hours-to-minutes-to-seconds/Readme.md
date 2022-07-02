# [Cahnge hours and minutes to seconds](https://edabit.com/challenge/JesaFi5ntBEbGT8bu)

<!-- Discription : This function allows you to input two positive number as arguments, where the first argument is a considered an hour and the second number is considered minute and the output is number which is considered seconds.
-->

## Syntax

changeSeconds(x,y) =>{}

**inputHour** 'Positive Numbers' **inputMinute** 'Positive NUmber'

## Return Value : 'numbers'

<!-- The out put is the hour from the hour input plus the minutes from the minute input converted in to seconds-->

## The code

function secondsChange(hours, minutes) { if (hours < 0) { return 'Not a valid
number'; } else if (minutes < 0) { return 'Not a valid number'; } else if
(typeof minutes !== 'number') { return 'Not a number'; } else if (typeof hours
!== 'number') { return 'Not a number'; } else { const timeInSeconds = hours _ 60
_ 60 + minutes \* 60;

    return timeInSeconds;

} }

## Test cases

test('changes the numbers in to seconds', () => { expect(secondsChange(5,
5)).equal(18300); expect(secondsChange(5, 0)).equal(18000);
expect(secondsChange(-5, -5)).equal("Not a valid number");
expect(secondsChange(-5, 5)).equal("Not a valid number");
expect(secondsChange(5, -5)).equal("Not a valid number");
expect(secondsChange(5, 'a')).equal("Not a number"); expect(secondsChange('A',
5)).equal("Not a number"); })

## Use cases

This function can be used to easily change hours and minutes to seconds during
math.

- 'secondsChange(5,5) = 18300'
- 'secondsChange(5,0) = 18000'

## Retrospective

- First thing that i learned is that tests arent boring at all.
- like jonathan said, u need to try and code every day so that u dont lose
  momentum, happened to me a bit.
- I used test, instead of describe and i also didnt use IT, I used expect and
  equal.
- I need to keep on coding everyday even a bit.

## Continue doing

- Freecodecamp course
- Youtube coding videos

## Start doing

- Code challenges
- Testing every part of you code

## Stop doing

- Consuming content instead of creating content
- Getting distracted by stuff
