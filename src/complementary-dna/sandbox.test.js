'use strict';

// 1st Try: use for loop //works
function DNAStrand1(dna){
  let dnaMap = {
      A: "T",
      T: "A",
      C: "G",
      G: "C"
    };
  let comDNA = "";
  for (key of dna) {
      comDNA += dnaMap[key];
    }
  return comDNA;
  }


// 2nd Try: use replace, RegEXP // works
const pairs = {
  A: "T",
  T: "A",
  C: "G",
  G: "C"
};
const DNAStrand2= (dna) => {
  return dna.replace( /./g, c => pairs[c])
}


// inspiration 01: use replace, RegEXP. 
// [ooflorent](https://www.codewars.com/users/ooflorent)
function DNAStrand01(dna) {
  return dna.replace(/./g, function(c) {
    return DNAStrand.pairs[c]
  })
}
DNAStrand.pairs = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C',
}


// inspiration 02: use map, join
// [colbydauph](https://www.codewars.com/users/colbydauph)
var pairs = {'A':'T','T':'A','C':'G','G':'C'};
function DNAStrand02(dna){
return dna.split('').map(function(v){ return pairs[v] }).join('');
}

/* 
const str = 'apple apple banana banana orange'
        const actual = solution(str);
        const expected = 'apple banana orange';
        expect(actual).toEqual(expected);
 */


for (const solution of [DNAStrand1, DNAStrand2, DNAStrand01, DNAStrand02]) {
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
}
