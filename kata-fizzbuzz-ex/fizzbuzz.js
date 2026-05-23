
export function checkNumber(numb) {

    const isDivisibleBy3 = numb % 3 == 0;

    if (isDivisibleBy3) {
        return 'Fizz';
    }
}