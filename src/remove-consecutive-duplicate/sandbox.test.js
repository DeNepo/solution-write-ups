'use strict';

// 1st Try:
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

// 2nd Try //works
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

//inspiration 1: Imahori //use split(), filter(x,i,arr), join(' ')
const removeConsecutiveDuplicates01 = s => s.split(" ").filter((x,i,arr) => x!=arr[i-1]).join(" ");

//inspiration 2: stonith //use replace(), Regular expression
const removeConsecutiveDuplicates02 = s => s.replace(/\b(\w+)(?: \1)+\b/g, '$1');


for (const solution of [removeConsecutiveDuplicates1, removeConsecutiveDuplicates2, removeConsecutiveDuplicates3, removeConsecutiveDuplicates4, removeConsecutiveDuplicates01, removeConsecutiveDuplicates02]) {
  describe(`${solution.name}: Remove consecutive duplicate words`, () => {
/*     describe('has default argument', () => {
      it('should return an empty string', () => {
        const actual = solution();
        const expected = "";
        expect(actual).toEqual(expected);
      });
    }); */
    describe('standard words string', () => {
      it('return a string with no consecutive duplicated words', () => {
        const str = 'apple apple banana banana orange'
        const actual = solution(str);
        const expected = 'apple banana orange';
        expect(actual).toEqual(expected);
      });
      it('a string with no consecutive duplicated words', () => {
        const str = 'app app banana banana orange '
        const actual = solution(str);
        const expected = 'app banana orange ';
        expect(actual).toEqual(expected);
      });
      it('_', () => {
        const str = 'apple apple banana banana orange apple'
        const actual = solution(str);
        const expected = 'apple banana orange apple';
        expect(actual).toEqual(expected);
      });
    });

    describe('string with not real words', () => {
      it('return a string with no consecutive duplicated words', () => {
        const str = 'a?le a?le banana banana orange'
        const actual = solution(str);
        const expected = 'a?le banana orange';
        expect(actual).toEqual(expected);
      });
      it('output a string with no consecutive duplicated words', () => {
        const str = 'a!p a!p ban.na ban.na orange'
        const actual = solution(str);
        const expected = 'a!p ban.na orange';
        expect(actual).toEqual(expected);
      });
    });
  });
}
