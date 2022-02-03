# [Complementary DNA](https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript)

 <!-- 
 Complementary DNA

Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

@param {String} [str = ""] - The string to be complement.
@returns {String} - Returns a complementary string.
@example

DNAStrand("ATTGC"); // "TAACG"

@example

DNAStrand("GTAT"); // "CATA"

<!-- 
Example: (input -> output)

"ATTGC" -> "TAACG"
"GTAT" -> "CATA"
dnaStrand []        `shouldBe` []
dnaStrand [A,T,G,C] `shouldBe` [T,A,C,G]
dnaStrand [G,T,A,T] `shouldBe` [C,A,T,A]
dnaStrand [A,A,A,A] `shouldBe` [T,T,T,T]
-->

## Syntax

> DNAStrand(`string`) -> `string`

### Parameters

**str**: `string`

The string to be complement.

### Return Value: `string`

Returns a complementary string.

## Test Cases

Sample tests from CodeWars:

```js
// directly from CodeWars
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(DNAStrand("AAAA"),"TTTT","String AAAA is")
    assert.strictEqual(DNAStrand("ATTGC"),"TAACG","String ATTGC is")
    assert.strictEqual(DNAStrand("GTAT"),"CATA","String GTAT is")   
  })
})
```

My tests from the sandbox:

```js
describe(`${solution.name}: return the other complementary side of DNA string`, () => {
    describe('test default value of parameter', () => {
      it('should return an empty string', () => {
        const actual = solution();
        const expected = '';
        expect(actual).toEqual(expected);
      });
    });

    describe('return standard DNA string', () => {
      it('"ATTGC" --> "TAACG"', () => {
        const str = "ATTGC";
        const actual = solution(str);
        const expected = "TAACG";
        expect(actual).toEqual(expected);
      });
      it('"GTAT" --> "CATA"', () => {
      const str = "GTAT";
      const actual = solution(str);
      const expected = "CATA";
      expect(actual).toEqual(expected);
      });
      
    });

  });
```

## Use Cases

<!-- #to do
  write a minimum of 2 use cases to show this functions behavior.

  try to find interesting _edge cases_, it's good for you ;)
  an edge case is when a function behaves different than you'd expect.
  This will help you and others better understand the function.

  https://www.geeksforgeeks.org/dont-forget-edge-cases/
-->

---

## Retrospective

<!-- #to do
  write any notes to help you review this exercise later, and to help others' study it.

  this might include:

  - good ideas to use later in your own code
  - less good ideas to avoid in your own code
  - new vocabulary you learned
  - the most important thing(s) you learned
  - something that you still don't understand but want to keep studying
  - something that surprised you
  - tricks you will want to remember and use later
-->

### Continue Doing

### Start Doing

### Stop Doing
