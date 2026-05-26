import { fizzBuzz } from "./fizzbuzz.js"

export function generateSequence() {
    const sequence = []

    for (let i = 1; i <= 100; i++) {
        sequence.push(fizzBuzz(i))
    }
    return sequence
}

const sequence = generateSequence()
sequence.forEach(item => console.log(item))