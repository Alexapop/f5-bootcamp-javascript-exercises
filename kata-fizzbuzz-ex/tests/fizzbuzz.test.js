import { describe, expect, test } from 'vitest';
import { checkNumber } from '../kata-fizzbuzz-ex\fizzbuzz.js';

describe('Fizzbuzz', () => {
    
    test('should return Fizz', () => {
        const n = 3;
        const expected = "Fizz";
        const result = checkNumber(n);
        expect(result).toBe(expected);
    })

})