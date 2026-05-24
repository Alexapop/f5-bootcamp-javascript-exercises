export function fizzBuzz(numb) {

     // El dato no es un número
     if (typeof numb !== 'number') {
          return 'el dato no es un número'
     }

     const isDivisibleBy3And5 = (numb % 3 == 0) && (numb % 5 == 0)
     const isDivisibleBy3 = numb % 3 == 0
     const isDivisibleBy5 = numb % 5 == 0


     // Número divisible por 3 y 5
     if (isDivisibleBy3And5) {
          return 'FizzBuzz'
     }

     // Número divisible por 3
     if (isDivisibleBy3) {
          return 'Fizz'
     }

     // Número divisible por 5
     if (isDivisibleBy5) {
          return 'Buzz'
     }

     //Número no divisible ni por 3 ni por 5
     return numb.toString()

}