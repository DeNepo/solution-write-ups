# Solution Write-Ups

The main objective of these exercises is practicing how to [learn from code](https://study.hackyourfuture.be/learning/learning-from-code), to be given source code you don't understand and to study it until you could write it yourself.  Keep these three words in mind as you complete your write-ups:

1. _Behavior_: What does a function do? What are it's arguments and it's return value? How could you use it in a program?
2. _Strategy_: How could you transform the arguments to the return value in small steps, focusing on the data not the code.  This is the realm of flow charts, diagrams, and pseudocode.
3. _Implementation_: Which language features and which lines of code can you use to make your strategy a reality?

There are many strategies for creating the same behavior, and there are many ways to implement the same strategy.

By studying multiple solutions to the same kata written by more experienced programmers, you will learn how to approach and solve coding challenges on your own.

### Index

- [Exercise Platforms](#exercise-platforms)
  - [Edabit](#edabit)
  - [Codewars](#codewars)
- [Exploring](#exploring)
  - [Easy is Ok](#easy-is-ok)
  - [Forfeit!](#forfeit)
  - [Sandbox](#sandbox)
  - [Forks](#forks)
  - [Sharing](#sharing)
- [Write-Ups](#write-ups)
  - [Sections](#sections)
  - [Example](#example)
  - [Template](#template)
- [Helpful Links](#helpful-links)

---

## Exercise Platforms

Normally people log into these platforms to solve challenges and progress through the ranks.  You'll be going there to forfeit challenges and study other people's solutions. Below are two platforms you can try out, you can stick with your favorite or use both.  If you know of another platform, go for it! All that matters is that you can study many solutions to the same problem

### Edabit

[Edabit](https://edabit.com) is an exercise platform that lets you choose from a wide selection of coding challenges to study.  The website has some helpful tutorials to get you started and each exercise has some suggested resources to study. You can choose freely between easy and difficult challenges.

Compared with Codewars the challenges on Edabit will be a little easier, and the solutions are generally more clear to read and understand. They may not always be the most "clever" solution, but you can pick up some good habits for writing clear and readable code.

### Codewars

[Codewars](https://www.codewars.com/) is a website with progressive programming challenges starting at **8 kyu** (easiest) all the way upt to **1 kyu** (the hardest).  You can learn more about Codewars by reading [the Codewars Wiki](https://github.com/codewars/codewars.com/wiki/).

Compared with Edabit, the challenges on Codewars can be more challenging.  Users on Codewars also submit more complex, "impressive" or imaginative solutions.  They may not be best practice, but they can sure be fun to puzzle out.

[TOP](#solution-write-ups)

---

## Exploring

These exercises are about exploring other people's code, not writing your own.  You will be more confident _Creating_ your own code in the future if right now you focus on _Reading_ and _Modifying_ others'.

### Easy is Ok

Don't push too fast through the Kyu levels, your goal here is to practice analyzing code, not to solve harder and harder problems. You can learn everything you need to learn by studying easier challenges.

Codewar users write some (overly) clever solutions to simple problems.  You can learn a lot about JavaScript and programming from them. The less you struggle to understand the problem the quicker you can lean from their code.

### Forfeit!

Don't spend time trying to pass the challenges you want to write up.  Unlock and forfeit the challenges right away.  There is plenty of time in your future to pass challenges on your own, right now your focus should be on understanding others' solutions.  This will help you build a mental library of techniques that will serve you better in the long run than being stuck on your own blank page.

After you've finished your analysis give it a go, see if you can't find your own solutions.  But first focus on understanding the problem and understanding other's solutions.

### Sandbox

After you've chosen the problem you want to write up, create a file called `problem-name.js` in the correct directory and experiment with a few solutions before choosing the ones you want to write up.  Stepping through the solutions side by side with your Markdown write-up pages will make your time a lot more productive.

- Step through the different solutions in JS Tutor or the debugger and with different arguments.
- Change the variable names to something that helps you understand their role in the function
- refactor the solutions to be more readable. write comments, expand expressions, add extra variables, whatever helps!
- Paste the solutions in the Kata's _Train_ page and see what happens when you change the code.  What changes can you make that still pass the tests? What changes make the tests fail?

Experimenting with different solutions to the same function will be the best way to understand a challenge's behavior, and the most effective way to come up with good example use cases.

Take a look through the [quarter-of-the-year.js](./8-kyu/quarter-of-the-year.js) example to see what this might look like.

### Forks

Writing _about_ code can be harder than actually writing it!  Spend a little time every day reading through other forks of this repo.  How do others write about strategy?  What kinds of examples do others come up with? What refactor options do others think of?

When you find someone's work that's especially helpful link to it in [this issue](https://github.com/HackYourFutureBelgium/solution-write-ups/issues/1) and and give them a star!  Let them and everyone else know that their work is worth studying.  You can also _watch_ their repos to get notifications whenever they commit new changes.

### Sharing

Did you find a fun kata with many good solutions to study? Link to it in [Awesome Katas](https://github.com/HackYourFutureBelgium/solution-write-ups/issues/2).

Do you have a great trick for studying Codewars? Is there a resource you found online that helped you? Share it!  Open an issue in this repository and give it a good label so others can find it.

[TOP](#solution-write-ups)

---

## Write-Ups

The main goal of these exercises is to write a markdown file analyzing _other people's_ solutions to a programming challenges.  You will also be analyzing your own solution to the kata, when you do this try to see your code as if someone else wrote it.

Along the way you will learn many important "soft skills" including: how to read and write documentation, how to understand source code, how to interpret test cases, and how to explain your code to others.

For each kata you study create a _new_ markdown file in this repository using [the template](./write-up-template.md).  Place it in the folder named after that kata's kyu level, and name the file after the kata.  Take a look at [the example write-up](./example-quarter-of-the-year) to see what yours might look like.

Would you be more comfortable doing your writeups in another language than english?  The goal of these exercises is to learn JavaScript in programming, if that's easier for you in another language then go for it! 

### Sections

Your write-ups should have these sections:

- **Motivation**: (just under the title) Describe the kata in plain english and give an idea of when/why/how this function might be useful in real life.
- **Syntax**: What does someone need to know to use the function? This includes the types of all _parameters_, and the _return value_.
- **Examples**: Write a few use cases. These show how the function could be used in a real program.  Practice finding interest [edge cases](https://www.geeksforgeeks.org/dont-forget-edge-cases/), it's good for you ;)
- **User Solutions**: Analyze the solutions written by (at least) 2 different users.  Chose solutions that used different strategies. your write-ups should include:
  - **Their Solution**: Copy-paste their code into your write-up
  - **Strategy**: Describe how they approached solving this problem.  This section should not include any mention off JavaScript syntax or language features. (this will take some practice)
  - **Implementation**: What code did they write to make their strategy a reality?  Include references to the language features they used.
  - **Possible Refactors**: What changes could you make to the function that would still pass the tests, without changing the strategy?  A good first step is listing other language features that could be used.
- **Notes**: Write any extra notes to help you and others review your write-up.

### Example

There's an [example write-up to study](./8-kyu/quarter-of-the-year.md) in the **8 Kyu** directory. Hopefully this will help you get the feel for it.  What you can't learn from this example you can learn by studying other people's write-ups and asking for help.

### Template

There is also [a template write-up](./write-up-template.md) you can use to get started.  It has all the required sections along with a description of what goes in each section. When you copy over the markdown to a new file, delete the explanations and fill in the sections with your own analyses.

---

## Helpful Links

- [Awesome Write-Ups](https://github.com/HackYourFutureBelgium/solution-write-ups/issues/1) (issue)
- [Awesome Katas](https://github.com/HackYourFutureBelgium/solution-write-ups/issues/2) (issue)
- [Learn to read the source, Luke](https://blog.codinghorror.com/learn-to-read-the-source-luke/) (article)
- [How to quickly and effectively read other people's code](https://selftaughtcoders.com/how-to-quickly-and-effectively-read-other-peoples-code/) (article)
- [How to understand someone else's code?](https://www.youtube.com/watch?v=tON6F_yZb-E) (video)
- [I can't read other people's code](https://www.reddit.com/r/learnprogramming/comments/3x38dx/i_cant_read_other_peoples_code/) (reddit)
- [Why I love reading other people's code and you should too](https://skorks.com/2010/05/why-i-love-reading-other-peoples-code-and-you-should-too/) (article)
- [How to read code without ripping your hair out](https://medium.com/launch-school/how-to-read-source-code-without-ripping-your-hair-out-e066472bbe8d) (article)
- [Read other people's code](https://www.lavieencode.net/blog/coding-101/read-other-peoples-code/) (article)
- [Effective mental models for code and systems](https://medium.com/@copyconstruct/effective-mental-models-for-code-and-systems-7c55918f1b3e) (article)
- [Learning from code](https://study.hackyourfuture.be/learning/learning-from-code) (gitbook)

[TOP](#solution-write-ups)
