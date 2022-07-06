import minMax from "./find-min-max.js"

test('this function should only accept arrays made of numbers', () => {
expect(minMax([1,2,3,4,5])).toEqual([1,5]);
expect(minMax([1,700,-8,89])).toEqual([-8,700])
expect(minMax([1,"a",6,8,500])).toEqual("Not a number")
expect(minMax([1,2,7,true,8])).toEqual("Not a number")
expect(minMax([1,2.5,9])).toEqual("Not a number");
})