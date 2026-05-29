import { describe, expect, test } from 'vitest'
import { wordExists } from '../../src/word-exists-or-not/word-exists.js'

describe('wordExists', () => {
    test('should return true when the text contains English', () => {
        const text = 'abcEnglishdef'
        const expected = true
        const result = wordExists(text)
        expect(result).toBe(expected)
    })

    test('should return true when the text contains English with different capital letters', () => {
        const text = 'eNglisH'
        const expected = true
        const result = wordExists(text)
        expect(result).toBe(expected)
    })

    test('should return false when the text does not contain English in the correct order', () => {
        const text = 'abcnEglishsef'
        const expected = false
        const result = wordExists(text)
        expect(result).toBe(expected)
    })
})