import { describe, test, expect } from "vitest"
import { fizzBuzz } from "../src/js/fizzbuzz"

describe('fizzBuzz', () => {
    // Comprobar si el dato no es un número
    test('should return error for string', () => {
        const n = 'hola'
        const expected = "el dato no es un número"
        const result = fizzBuzz(n)
        expect(result).toBe(expected)
    })

    // Número divisible por 3 -> Then el resultado debe ser "Fizz"
    test('should return Fizz', () => {
        const n = 3
        const expected = 'Fizz'
        const result = fizzBuzz(n)
        expect(result).toBe(expected)
    })

    // Número divisible por 5 -> Then el resultado debe ser "Buzz"
    test('should return Buzz', () => {
        const n = 5
        const expected = 'Buzz'
        const result = fizzBuzz(n)
        expect(result).toBe(expected)
    })

    // Número divisible por 3 & 5 -> Then el resultado debe ser "FizzBuzz"
    test('should return FizzBuzz', () => {
        const n = 15
        const expected = 'FizzBuzz'
        const result = fizzBuzz(n)
        expect(result).toBe(expected)
    })

    //Número no divisible ni por 3 ni por 5
    test('should return a string', () => {
        const n = 7
        const expected = '7'
        const result = fizzBuzz(n)
        expect(result).toBe(expected)
    })
})