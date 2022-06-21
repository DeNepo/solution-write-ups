# Solution Write-Ups

The main objective of these exercises is practicing how to
[learn from code](https://study.hackyourfuture.be/learning/learning-from-code),
to be given source code you don't understand and to study it until you could
write it yourself. Keep these three words in mind as you complete your
write-ups:

1. _Behavior_: What does a function do? What are it's arguments and it's return
   value? How could you use it in a program?
2. _Strategy_: How could you transform the arguments to the return value in
   small steps, focusing on the data not the code. This is the realm of flow
   charts, diagrams, and pseudocode.
3. _Implementation_: Which language features and which lines of code can you use
   to make your strategy a reality?

There are many strategies for creating the same behavior, and there are many
ways to implement the same strategy.

By studying multiple solutions to the same challenge written by more experienced
programmers, you will learn how to approach and solve coding challenges on your
own.

- [Getting Started](#getting-started)
- [Exercise Platforms](#exercise-platforms)
- [Exploring](#exploring)
  - [Easy is Ok](#easy-is-ok)
  - [Forfeit!](#forfeit)
  - [Sandbox](#sandbox)
  - [Refactoring Tests](#refactoring-tests)
  - [Forks](#forks)
  - [Sharing](#sharing)
- [Write-Ups](#write-ups)
  - [Sections](#sections)
  - [Example](#example)
  - [Template](#template)
- [Helpful Links](#helpful-links)

---

## Getting Started

> You will need
> [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) and
> [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) on your computer
> to study this material

1. Clone this repository:
   - `git clone git@github.com:HackYourFutureBelgium/solution-write-ups.git`
     (SSH)
2. `cd` into the repository
   - `cd solution-write-ups`
3. Install dependencies:
   - `npm install`

### In the Browser

> Using a browser with good DevTools will make your life easier:
> [Chromium](http://www.chromium.org/getting-involved/download-chromium),
> [FireFox](https://www.mozilla.org/en-US/firefox/new/),
> [Edge](https://www.microsoft.com/edge),
> [Chrome](https://www.google.com/chrome/)

1. Install or update the `study-lenses` package globally
   - `npm install -g study-lenses` (if you do not have it already)
   - `npm update -g study-lenses` (if you already have it installed)
2. Run the `study` command from your CLI
   - `study`
3. The material will open in your default browser, you're good to go!
   - if a `.test.js` file does not work, you can manually check on tests from
     the config options

> If you have a windows computer and get this error:
>
> - `... /study.ps1 cannot be loaded because running scripts ...`
>
> follow the instructions in
> [this StackOverflow answer](https://stackoverflow.com/a/63424744), that should
> take care of it ; )

### In Node.js

> The
> [debugger built into VSCode](https://code.visualstudio.com/Docs/editor/debugging)
> is very good, it's all you'll need. Don't forget to set
> [breakpoints](https://code.visualstudio.com/Docs/editor/debugging#_breakpoints)!

- Running files in `.js` (without `.test`):
  - _debugger_: open the file, select the debug option from your VSCode
    side-bar, choose the `Current JS File (no tests)` option, and click the
    triangle button. (hint you will need to use breakpoints)
  - _console_: `node path/to/file.js`, simple and easy
- Running files ending in `.test.js` or `.spec.js`:
  - _debugger_: open the file, select the debug option from your VSCode
    side-bar, choose the `Current JS File (with tests)` option, and click the
    triangle button. (hint: you will need to use breakpoints)
  - _console_: files ending in .test.js or .spec.js must be run with
    `npm run test -- path/to/file.test.js`.

[TOP](#solution-write-ups)

---

## Exercise Platforms

Normally people log into these platforms to solve challenges and progress
through the ranks. You'll be going there to forfeit challenges and study other
people's solutions. Below are some platforms you can try out, you can stick with
your favorite or use them all. If you know of another platform, go for it! All
that matters is that you can study many solutions to the same problem

### Edabit

> free trial period

[Edabit](https://edabit.com) is an exercise platform that lets you choose from a
wide selection of coding challenges to study. The website has some helpful
tutorials to get you started and each exercise has some suggested resources to
study. You can choose freely between easy and difficult challenges.

Compared with Codewars or Exercism the challenges on Edabit will be a little
easier, and the solutions are generally more clear to read and understand. They
may not always be the most "clever" solution, but you can pick up some good
habits for writing clear and readable code.

### LeetCode

[LeetCode](https://leetcode.com/) is full of great challenges, supporting
explanations/videos, solutions, and discussions. LeetCode also has many other
learning resources to help you take the first steps in Computer Science and
algorithms.

### Codewars

[Codewars](https://www.codewars.com/) is a website with progressive programming
challenges starting at **8 kyu** (easiest) all the way upt to **1 kyu** (the
hardest). You can learn more about Codewars by reading
[the Codewars Wiki](https://github.com/codewars/codewars.com/wiki/).

Compared with Edabit, the challenges on Codewars can be more challenging. Users
on Codewars also submit more complex, "impressive" or imaginative solutions.
They may not be best practice, but they can sure be fun to puzzle out.

### CoderByte

> limited access with free account

[CoderByte](https://coderbyte.com/) is somewhere between Codewars and Edabit.
There are different levels of challenges and many solutions to study. Some of
the challenges come with a video explaining the problem and walking through a
solution.

### Exercism

On [Exercism](https://exercism.io/tracks/javascript/concepts) you will be able
to choose challenges by language feature, submit solutions online, and study
other people's solutions (only after you pass).

Some of the exercises are functions, study these. Some of them are classes
(Object Oriented Programming), you can skip these.

[TOP](#solution-write-ups)

---

## Exploring

These exercises are about exploring other people's code, not writing your own.
You will be more confident _Creating_ your own code in the future if right now
you focus on _Reading_ and _Modifying_ others'.

### Easy is Ok

Don't push too fast to harder and harder challenges. Your goal here is to
practice analyzing code, not to solve harder and harder problems. You can learn
everything you need to learn by studying easier challenges.

Codewar users write some (overly) clever solutions to simple problems. You can
learn a lot about JavaScript and programming from them. The less you struggle to
understand the problem the quicker you can lean from their code.

### Forfeit

Don't spend time trying to pass the challenges you want to write up. Unlock and
forfeit the challenges right away. There is plenty of time in your future to
pass challenges on your own, right now your focus should be on understanding
others' solutions. This will help you build a mental library of techniques that
will serve you better in the long run than being stuck on your own blank page.

After you've finished your analysis give it a go, see if you can't find your own
solutions. But first focus on understanding the problem and understanding
other's solutions.

### Sandbox

After you've chosen the problem you want to write up, create a file called
`problem-name.js` in the correct directory and experiment with a few solutions
before choosing the ones you want to write up. Stepping through the solutions
side by side with your Markdown write-up pages will make your time a lot more
productive.

- Step through the different solutions in JS Tutor or the debugger and with
  different arguments.
- Change the variable names to something that helps you understand their role in
  the function
- refactor the solutions to be more readable. write comments, expand
  expressions, add extra variables, whatever helps!
- Paste the solutions in the challenge's practice environment and see what
  happens when you change the code. What changes can you make that still pass
  the tests? What changes make the tests fail?

Experimenting with different solutions to the same function will be the best way
to understand a challenge's behavior, and the most effective way to come up with
good example use cases.

Take a look through the
[example-quarter-of-the-year/sandbox.test.js](./example-quarter-of-the-year/sandbox.test.js)
example to see what this might look like.

### Refactoring Tests

To run the tests from different platforms in your `sandbox.test.js` file, you
will need to refactor the test cases from whatever format they are in to use
`describe`, `it` and `expect`. This will take some practice but will become a
routine task. Check out the [./refactoring-tests.mp4](./example-quarter-of-the-year/refactoring-tests.mp4)
to see it live, here are the examples from the video:

<details>
<summary>test refactor examples</summary>

```js
// -- tests from Edabit: Add up the Numbers from a Single Number

Test.assertEquals(addUp(4), 10); // √
Test.assertEquals(addUp(13), 91); // √
Test.assertEquals(addUp(600), 180300);
Test.assertEquals(addUp(392), 77028);
Test.assertEquals(addUp(53), 1431);
Test.assertEquals(addUp(897), 402753);
Test.assertEquals(addUp(23), 276);
Test.assertEquals(addUp(1000), 500500);
Test.assertEquals(addUp(738), 272691);
Test.assertEquals(addUp(100), 5050);
Test.assertEquals(addUp(925), 428275);
Test.assertEquals(addUp(1), 1);
Test.assertEquals(addUp(999), 499500);
Test.assertEquals(addUp(175), 15400);
Test.assertEquals(addUp(111), 6216);

// -- tests refactored to describe/it/expect

describe('addUp: should add up the numbers less than or equal to the parameter', () => {
  it('should return 10 when we pass 4', () => {
    expect(addUp(4)).toEqual(10);
  });
  it('should return 91 when we pass 13', () => {
    expect(addUp(13)).toEqual(91);
  });
});
```

</details>

### Forks

Writing _about_ code can be harder than actually writing it! Spend a little time
every day reading through other forks of this repo. How do others write about
strategy? What kinds of examples do others come up with? What refactor options
do others think of?

When you find someone's work that's especially helpful link to it in
[this issue](https://github.com/HackYourFutureBelgium/solution-write-ups/issues/1)
and and give them a star! Let them and everyone else know that their work is
worth studying. You can also _watch_ their repos to get notifications whenever
they commit new changes.

### Sharing

Did you find a fun challenge with many good solutions to study? Link to it in
[Awesome Challenges](https://github.com/HackYourFutureBelgium/solution-write-ups/issues/2).

Do you have a great trick for studying Codewars? Is there a resource you found
online that helped you? Share it! Open an issue in this repository and give it a
good label so others can find it.

[TOP](#solution-write-ups)

---

## Write-Ups

The main goal of these exercises is to write a markdown file analyzing _other
people's_ solutions to a programming challenges. You will also be analyzing your
own solution to the challenge, when you do this try to see your code as if
someone else wrote it.

Along the way you will learn many important "soft skills" including: how to read
and write documentation, how to understand source code, how to interpret test
cases, and how to explain your code to others.

For each challenge you study create a _new_ folder file in this repository with
a README created from [this template](./template-write-up). Take a look at
[the example write-up](./example-quarter-of-the-year) to see what yours might
look like. But don't stop there! you can fill each challenge's folder with any
notes or resources you found helpful: screen shots of the debugger or JS tutor,
diagrams, flowcharts, fun use cases ... whatever helped you understand the
challenge and it's solutions.

Would you be more comfortable doing your write-ups in another language than
english? The goal of these exercises is to learn JavaScript in programming, if
that's easier for you in another language then go for it!

### Write-up Files

Your write-ups should have these files, at least. Is there something else you
want to include? go for it:

- **`/README.md`**
  - **Motivation**: (just under the title) Describe the challenge in plain
    english and give an idea of when/why/how this function might be useful in
    real life.
  - **Syntax**: What does someone need to know to use the function? This
    includes the types of all _parameters_, and the _return value_.
  - **Test Cases**: include the test cases from the exercise platform. Feeling
    motivated? Write a few extra tests of your own - practice finding
    [edge cases](https://www.geeksforgeeks.org/dont-forget-edge-cases/), it's
    good for you ;)
  - **Use Cases**: Write a few use cases. These show how the function could be
    used in a real program.
  - **Retrospective**: What did you learn from studying this challenge? What
    good ideas do you want to use in your code? What less good ideas do you want
    to avoid? Anything else you'd like to add?
- **`/other-person.md`**: Analyze the solutions written by (at least) 2
  different users. Chose solutions that used different strategies. your
  write-ups should include:
  - **Strategy**: Describe how they approached solving this problem. This
    section should not include any mention off JavaScript syntax or language
    features. (this will take some practice)
  - **Implementation**: What code did they write to make their strategy a
    reality? Include references to the language features they used.
  - **Possible Refactors**: What changes could you make to the function that
    would still pass the tests, without changing the strategy? A good first step
    is listing other language features that could be used.
  - **References**: Links that helped you to understand this solution or to
    think of possible refactors
- **`/remix-x.md`**: After studying a few different ways to solve this problem,
  how would you want to do it? You don't need to start from an empty function!
  In these exercises you should focus on how you would adjust or combine
  existing solutions to make something you like more.
  - The same as `other-person.md`, but with an explanation of which solutions
    inspired you and how you designed your remix.
- **`/sandbox.test.js`**:
  - Test cases for the challenge
  - Copy-pasted solutions from other users
  - Your own refactors and experiments

### Example

There's an [example write-up to study](./example-quarter-of-the-year) in the
`/example-quarter-of-the-year` directory. Hopefully this will help you get the
feel for it. What you can't learn from this example you can learn by studying
other people's write-ups and asking for help.

### Template

There is also [a template write-up](./template-write-up) you can use to get
started. It has all the required files along with a description of what goes in
each section. You can copy-paste the folder for each challenge you study

---

## Helpful Links

- [Awesome Write-Ups](https://github.com/HackYourFutureBelgium/solution-write-ups/issues/1)
  (issue)
- [Awesome Challenges](https://github.com/HackYourFutureBelgium/solution-write-ups/issues/2)
  (issue)
- [Learn to read the source, Luke](https://blog.codinghorror.com/learn-to-read-the-source-luke/)
  (article)
- [How to quickly and effectively read other people's code](https://selftaughtcoders.com/how-to-quickly-and-effectively-read-other-peoples-code/)
  (article)
- [How to understand someone else's code?](https://www.youtube.com/watch?v=tON6F_yZb-E)
  (video)
- [I can't read other people's code](https://www.reddit.com/r/learnprogramming/comments/3x38dx/i_cant_read_other_peoples_code/)
  (reddit)
- [Why I love reading other people's code and you should too](https://skorks.com/2010/05/why-i-love-reading-other-peoples-code-and-you-should-too/)
  (article)
- [How to read code without ripping your hair out](https://medium.com/launch-school/how-to-read-source-code-without-ripping-your-hair-out-e066472bbe8d)
  (article)
- [Read other people's code](https://www.lavieencode.net/blog/coding-101/read-other-peoples-code/)
  (article)
- [Effective mental models for code and systems](https://medium.com/@copyconstruct/effective-mental-models-for-code-and-systems-7c55918f1b3e)
  (article)
- [Learning from code](https://study.hackyourfuture.be/learning/learning-from-code)
  (gitbook)

[TOP](#solution-write-ups)
