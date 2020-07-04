# Behavior, Strategy, Implementation

What?! Coding exercises, without writing any code?! 100%

The main objective of these exercises is practicing how to [Learn from Code](https://study.hackyourfuture.be/learning/learning-from-code), to be given source code you don't understand and to study it until you could write it yourself.  Keep these three words in mind as you complete your writeups:

1. _Behavior_: What does a function do? What are it's arguments and it's return value? How could you use it in a program?
1. _Strategy_: How could you transform the arguments to the return value in small steps, focusing on the data not the code.  This is the realm of flow charts, diagrams, and pseudocode.
1. _Implementation_: Which language features and which lines of code can you use to make your strategy a reality?

There are many strategies for creating the same behavior, and there are many ways to implement the same strategy.

By studying multiple solutions to the same challenge, written by more experienced programmers, you will learn how to approach and solve coding challenges on your own.

### Index

- [Codewars](#about-codewars)
- [Exploring](#exploring)
  - [Easy is Ok](#easy-is-ok)
  - [Forfeit!](#forfeit)
  - [Sandbox](#sandbox)
  - [Forks](#forks)
  - [Sharing](#sharing)
- [Writeups](#writeups)
  - [Sections](#sections)
  - [Example](#example)
  - [Template](#template)

---

## Codewars

These exercises are based on [Codewars](https://www.codewars.com/), a website with progressive programming challenges in many different languages.  You can learn more about Codewars by reading [the Codewars Wiki](https://github.com/codewars/codewars.com/wiki/).

Normally people log into Codewars to solve [Katas](https://github.com/codewars/codewars.com/wiki/Kata) and progress through the ranks (Kyus).  You'll be going there to forfeit challenges and study other people's solutions.

[TOP](#behavior-strategy-implementation)

---

## Exploring

These exercises are about exploring other people's code, not writing your own.  You will be more confident _Creating_ your own code in the future if right now you focus on _Reading_ and _Modifying_ others'.

### Easy is Ok

Don't push too fast through the Kyu levels, your goal here is to practice analyzing code, not to solve harder and harder problems. You can learn everything you need to studying easy challenges.

Codewar users write some (overly) clever solutions simple problems.  You can learn a lot about JavaScript and programming from them. The less you struggle to understand the problem the more you can lean from their code.

### Forfeit!

Don't spend time trying to pass the challenges you want to write up.  Unlock and forfeit the challenges right away.  There is plenty of time in your future to pass challenges on your own, right now your focus should be on understanding others' solutions.  This will help you build a mental library of techniques that will serve you better in the long run than being stuck on your own blank page.

After you've finished your analysis give it a go, see if you can't find your own solutions.  But first focus on understanding the problem and understanding other's solutions.

### Sandbox

Experiment with and step through several solutions before choosing the two you want to write up.

- Copy-paste different solutions into JS Tutor or the debugger and practice stepping through them with different arguments.
- Change the variable names to something that helps you understand their role in the function
- Paste the solutions in the Kata's _Train_ page and see what happens when you change the code.  What changes can you make that still pass the tests? What changes make the tests fail?

After you've chosen the solutions you want to write up, use the `sandbox.js` files in this repo to study solutions in the VSCode debugger while you write up your analysis.  Stepping through the code side by side with your Markdown writeup pages will make your time a lot more productive.

Experimenting with the function will be the best way to understand it's behavior and the most effective way to come up with good example use cases.

### Forks

Writing _about_ code can be harder than actually writing it!  Spend a little time every day reading through other forks of this repo.  How do others write about strategy?  What kinds of examples do others come up with? What refactor options do others think of?

When you find someone's work that's especially helpful go ahead and give them a star!  Let them and everyone else know that their work is worth studying.  You can also _watch_ their repos to get notifications whenever they commit new changes.

### Sharing

Did you find a fun challenge with many good solutions to study? Do you have a great trick for studying Codewars? Is there a resource you found online that helped you?

Share it!  Open an issue in this repository and label it `helpful`.

[TOP](#behavior-strategy-implementation)

---

## Writeups

The end goal of these exercises is to write a markdown file analyzing different people's solutions to the same programming challenges.  Along the way you will learn many important "soft skills" including: how to read and write documentation, how to understand source code, how to interpret test cases, and how to explain your code to others.

### Sections

Your writeups should have these sections:

- **Motivation**: (just under the title) Describe the challenge in plain english and give an idea of when/why/how this function might be useful in real life.
- **Syntax**: What does someone need to know to use the function? This includes the types of all _parameters_, and the _return value_.
- **Examples**: Write a few use cases. These show how the function could be used in a real program.  Practice finding interest [edge cases](https://www.geeksforgeeks.org/dont-forget-edge-cases/), it's good for you ;)
- **User Solutions**: Analyze the solutions written by (at least) 2 different users, include:
  - **Their Solution**: Copy-paste their code into your writeup
  - **Strategy**: Describe how they approached solving this problem.  This section should not include any mention off JavaScript syntax or language features. (this will take some practice)
  - **Implementation**: What code did they write to make their strategy a reality?  Include references to the language features they used.
  - **Possible Refactors**: What changes could you make to the function that would still pass the tests, without changing the strategy?  A good first step is listing other language features that could be used.
- **Notes**: Write any extra notes to help you and others review your writeup.

### Example

There's an [example writeup to study](./8-kyu/quarter-of-the-year.md) in the **8 Kyu** directory. Hopefully this will help you get the feel for it.  What you can't learn from this example you can learn by studying other people's writeups and asking for help.

### Template

There is also [a template writeup](./writeup-template.md) you can use to get started.  It has all the required sections along with a description of what goes in each section. When you copy over the markdown to a new file, delete the explanations and fill in the sections with your own analyses.
