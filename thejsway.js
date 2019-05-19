/*
Improved hello
Write a program that asks the user for his first name and his last name.
The program then displays them in one sentence.
*/

function askName() {
   let name = prompt("Write your name");
   let lastName = prompt("Write your last name");
   console.log(`Welcome ${name} ${lastName}`);
};
askName();

/*
VAT calculation
Write a program that asks the user for a raw price. After that,
it calculates the corresponding final price using a VAT rate of 20.6%.
*/

function vat(){
   let rawPrice = Number(prompt('What is the raw price to calculate the VAT rate'))
   let vatRate = rawPrice * 0.206;
   console.log(`The VAT calculation is ${vatRate}`)
}

/*
From Celsius to Fahrenheit degrees
Write a program that asks
for a temperature in Celsius degrees, then displays it in Fahrenheit degrees.

The conversion between scales is given by the formula: [°F] = [°C] x 9 / 5 + 32.

*/

function celsiusToFahreinheit(){
   let degrees = prompt('What is the temperature in Celsius degree?');
   let fahrenheitDegrees = (degrees * 9 / 5) + 32;
   return fahrenheitDegrees;
}
console.log(celsiusToFahreinheit());