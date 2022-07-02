
import { expect } from 'code';
import secondsChange from './change-to-seconds.js';

test('changes the numbers in to seconds', () => {
 expect(secondsChange(5, 5)).equal(18300);
 expect(secondsChange(5, 0)).equal(18000);
 expect(secondsChange(-5, -5)).equal("Not a valid number");
 expect(secondsChange(-5, 5)).equal("Not a valid number");
 expect(secondsChange(5, -5)).equal("Not a valid number");
 expect(secondsChange(5, 'a')).equal("Not a number");
 expect(secondsChange('A', 5)).equal("Not a number");
})