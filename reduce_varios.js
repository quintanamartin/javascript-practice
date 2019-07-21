//Cómo concatenamos los strings 'a', 'b', 'c' usando reduce?
/*
const someStrings = ['a', 'b', 'c'];

const newString = someStrings.reduce((a, b) => a + b);

console.log(newString);
*/
//Usando el método reduce(), cómo sumamos la cantidad de población de cada país, exceptuando China?
const countriesData = [
	{
		country: 'China',
		population: 1409517397
	},
	{
		country: 'India',
		population: 1339180127
	},
	{
		country: 'USA',
		population: 324459463
	},
	{
		country: 'Indonesia',
		population: 263991379
	}
];

const populationQuantity = countriesData.reduce((accum, elem) => {
	if (elem.country === 'China') {
		return accum;
	} else {
		return (accum += elem.population);
	}
}, 0);
console.log(populationQuantity);
