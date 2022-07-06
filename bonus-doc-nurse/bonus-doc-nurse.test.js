// #todo

/* 0. Starter Code

  Each exercises will have this format:
  - a JSDoc describing the behavior
  - an empty space where you'll write your solutions
  - a for-of loop with test cases inside
  - a secret solution you can use to write tests

*/

// =============== JSDoc description of the challenge ===============

/**
 * Repeats a string a specific number of times.
 *
 * @param {string} [text=''] - The string to repeat. Defaults to empty string.
 * @param {number} [repetitions=1] - How many times to repeat. Defaults to 1.
 *  Repetitions must be greater than zero, and must be an integer.
 * @returns {string} The text repeated as many times as repetitions.
 */

// =============== your solutions will go here ===============

/**
 * @param employee
 * @param premium
 */
function bonus(employee, premium) {
  let bonuses = 0;
  const ted = {
    profession: 'nurse',
    experience: '12',
  };

  if (employee.profession === 'doctor' && employee.experience < 10) {
    bonuses = premium * 1.5;
  } else if (
    employee.profession === 'doctor' &&
    employee.experience >= 10 &&
    employee.experience < 20
  ) {
    bonuses = premium * 2;
    if (bonuses >= 1000) {
      throw new Error('Too much dough');
    }
  } else if (
    employee.profession === 'doctor' &&
    employee.experience >= 20 &&
    employee.experience < 55
  ) {
    bonuses = premium * 3;
    if (bonuses >= 1000) {
      throw new Error('Too much dough');
    }
  } else if (employee.profession === 'nurse' && employee.experience < 10) {
    bonuses = premium * 1.2;

    if (bonuses >= 500) {
      throw new Error('Too much dough');
    }
  } else if (
    employee.profession === 'nurse' &&
    employee.experience >= 10 &&
    employee.experience < 15
  ) {
    bonuses = premium * 1.3;

    if (bonuses >= 500) {
      throw new Error('Too much dough');
    }
  } else if (
    employee.profession === 'nurse' &&
    employee.experience >= 15 &&
    employee.experience < 20
  ) {
    bonuses = premium * 1.5;

    if (bonuses >= 500) {
      throw new Error('Too much dough');
    }
  } else if (employee.profession === 'nurse' && employee.experience >= 20) {
    bonuses = premium * 1.7;
    if (bonuses >= 500) {
      throw new Error('Too much dough');
    }
  } else if (
    employee.profession !== 'nurse' ||
    employee.profession !== 'doctor'
  ) {
    return 'Invalid Profession';
  }
  return Math.floor(bonuses);
}

const tia = {
  profession: 'nurse',
  experience: '9',
};
console.log(bonus(tia, 200));

// =============== a for-of loop to control which solution(s) are tested ===============

// eslint-disable-next-line no-restricted-syntax
for (const solution of [bonus]) {
  // =============== test cases for this challenge ===============
  describe(`${solution.name}: calculates the bonus`, () => {
    describe("calculate the bonus for the nurses", () => {
      describe("calculate the bonus for nurses with less than 10 years of experience", () => {
        for (let i = 0; i < 10; i++) {
          it("should multiply the bonus with 1.2 for 200 and get 240", () => {
            expect(solution({ profession: "nurse", experience: i }, 200)).toBe(
              240
            );
          });
          it("should multiply the bonus with 1.2 for 400 and get 480", () => {
            expect(solution({ profession: "nurse", experience: i }, 400)).toBe(
              480
            );
          });
          it("should throw an error if the money is more than 500", () => {
            expect(() =>
              solution({ profession: "nurse", experience: i }, 600)
            ).toThrowError(new Error("Too much dough"));
          });
        }
      });
      describe("calculate the bonus for nurses with more than 10 years of experience", () => {
        for (let i = 10; i < 15; i++) {
          it("should multiply the bonus with 1.3 for 200", () => {
            expect(solution({ profession: "nurse", experience: i }, 200)).toBe(
              260
            );
          });
          it("should multiply the bonus with 1.3 for 200", () => {
            expect(solution({ profession: "nurse", experience: 10 }, 200)).toBe(
              260
            );
          });
          it("should throw an error if the money is more than 500", () => {
            expect(() =>
              solution({ profession: "nurse", experience: i }, 400)
            ).toThrowError(new Error("Too much dough"));
          });
          it("should thow an error if the money is more than 500", () => {
            expect(() =>
              solution({ profession: "nurse", experience: i }, 600)
            ).toThrowError(new Error("Too much dough"));
          });
        }
      });
      describe("calculate the bonus for nurses with more than 15 years of experience", () => {
        for (let i = 15; i < 20; i++) {
          it("should multiply the bonus with 1.5 for 200", () => {
            expect(solution({ profession: "nurse", experience: i }, 200)).toBe(
              300
            );
          });
          it("should multiply the bonus with 1.5 for 200", () => {
            expect(solution({ profession: "nurse", experience: 15 }, 200)).toBe(
              300
            );
          });
          it("should throw an error if the money is more than 500", () => {
            expect(() =>
              solution({ profession: "nurse", experience: i }, 400)
            ).toThrowError(new Error("Too much dough"));
          });
          it("should thow an error if the money is more than 500", () => {
            expect(() =>
              solution({ profession: "nurse", experience: i }, 600)
            ).toThrowError(new Error("Too much dough"));
          });
        }
      });
      describe("calculate the bonus for nurses with more than 20 years of experience", () => {
        for (let i = 20; i < 55; i++) {
          it("should multiply the bonus with 1.7 for 200", () => {
            expect(solution({ profession: "nurse", experience: i }, 200)).toBe(
              340
            );
          });
          it("should multiply the bonus with 1.7 for 200", () => {
            expect(solution({ profession: "nurse", experience: 20 }, 200)).toBe(
              340
            );
          });
          it("should throw an error if the money is more than 500", () => {
            expect(() =>
              solution({ profession: "nurse", experience: i }, 400)
            ).toThrowError(new Error("Too much dough"));
          });
          it("shoud thow an error if the money is more than 500", () => {
            expect(() =>
              solution({ profession: "nurse", experience: i }, 600)
            ).toThrowError(new Error("Too much dough"));
          });
        }
      });
    });
    describe("calculate bonus for the doctors", () => {
      describe("calculate bonus for doctors with less than 10 years of experience", () => {
        for (let i = 0; i < 10; i++) {
          it("should multiply the bonus with 1.5 for 200", () => {
            expect(solution({ profession: "doctor", experience: i }, 200)).toBe(
              300
            );
          });
          it("should multipky the bonus with 1.5 for 400", () => {
            expect(solution({ profession: "doctor", experience: i }, 400)).toBe(
              600
            );
          });
          it("should multiply the bonus with 1.5 for 600", () => {
            expect(solution({ profession: "doctor", experience: i }, 600)).toBe(
              900
            );
          });
        }
      });
      describe("calculate bonus for doctors with more than 10 years of experience", () => {
        for (let i = 10; i < 20; i++) {
          it("should multiply the bonus with 2 for 200", () => {
            expect(solution({ profession: "doctor", experience: i }, 200)).toBe(
              400
            );
          });
          it("should multiply the bonus with 2 for 200", () => {
            expect(solution({ profession: "doctor", experience: 10 }, 200)).toBe(
              400
            );
          });
          it("should multiply the bonus with 2 for 400", () => {
            expect(solution({ profession: "doctor", experience: i }, 400)).toBe(
              800
            );
          });
          it("should throw an error if the bonus is more than 1000", () => {
            expect(() =>
              solution({ profession: "doctor", experience: i }, 600)
            ).toThrowError(new Error("Too much dough"));
          });
        }
      });
      describe("calculate bonus for doctors with more than 20 years of experience", () => {
        for (let i = 20; i < 55; i++) {          it("should multiply the bonus with 3 for 200", () => {
            expect(solution({ profession: "doctor", experience: i }, 200)).toBe(
              600
            );
          });
          it("should multiply the bonus with 3 for 200", () => {
            expect(solution({ profession: "doctor", experience: 20 }, 200)).toBe(
              600
            );
          });
          it("should throw an error if the bonus is more than 1000", () => {
            expect(() =>
              solution({ profession: "doctor", experience: i }, 400)
            ).toThrowError(new Error("Too much dough"));
          });
          it("should throw an error if the bonus is more than 1000", () => {
            expect(() =>
              solution({ profession: "doctor", experience: i }, 600)
            ).toThrowError(new Error("Too much dough"));
          });
        }
      });
    }); 
     describe("validate the profession", () =>{
       describe("checks if the profession is right", () =>{      
         it("Presesnts a string thas tells profession is not valid if the profession is not doctor or nurse", ()=>{
          expect(
          solution({ profession: "janitor", experience: 12 }, 600)
        ).toBe("Invalid Profession");
         })
         it("Presesnts a string thas tells profession is not valid if the profession is not doctor or nurse", ()=>{
          expect(
          solution({ profession: "psychologist", experience: 12 }, 600)
        ).toBe("Invalid Profession");
         })
         it("Presesnts a string thas tells profession is not valid if the profession is not doctor or nurse", ()=>{
          expect(
          solution({ profession: "clerk", experience: 12 }, 600)
        ).toBe("Invalid Profession");
         })
         it("Presesnts a string thas tells profession is not valid if the profession is not doctor or nurse", ()=>{
          expect(
          solution({ profession: "anesthesiologist", experience: 12 }, 600)
        ).toBe("Invalid Profession");
         })
       
       });
     })
  });
}
// =============== a minified solution you can use to test your test cases ===============

// prettier-ignore
/**
 * @param a
 * @param b
 */
