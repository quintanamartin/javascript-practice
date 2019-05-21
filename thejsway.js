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

/*
Following day
Write a program that accepts a day name from the user,
then shows the name of the following day.Incorrect inputs must be taken into account.
*/
const followingDay = prompt('Pick the current day of the week').toLowerCase();

switch(followingDay){
   case "monday":
      console.log('The following day is Tuesday');
      break;
   case "tuesday":
      console.log('The following day is Wednesday');
      break;
   case "wednesday":
      console.log('The following day is Thursday');
      break;
   case "thursday":
      console.log('The following day is Friday');
      break;
   case "friday":
      console.log('The following day is Saturday');
      break;
   case "saturday":
      console.log('The following day is Sunday');
      break;
   case "sunday":
      console.log('The following day is Monday');
      break;
   default:
      console.log('This is nos a valid day of the week');
}

/*
Carousel
Write a program that launches a carousel for 10 turns, showing the turn number each time.

When it's done, improve it so that the number of turns is given by the user.
*/
function carousel(){
carouselTurns = Number(prompt('Pick the carousel turns'));
   for(let i = 0; i <= carouselTurns; i++){
      console.log(i);
   }
}