
console.log('connected')

export function WordExists(text) {


     if (typeof text !== 'string') {
        return false;
    }
    const pattern = /English/i

    if (pattern.test(text)) {
        return true
    } else {
        return false
    }
}