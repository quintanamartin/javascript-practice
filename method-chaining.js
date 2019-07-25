//JavaScript — Learn to Chain Map, Filter, and Reduce
data = [
	{
		name: 'Butters',
		age: 3,
		type: 'dog'
	},
	{
		name: 'Lizzy',
		age: 6,
		type: 'dog'
	},
	{
		name: 'Red',
		age: 1,
		type: 'cat'
	},
	{
		name: 'Joey',
		age: 3,
		type: 'dog'
	}
];

const dogs = data
	.filter(currValue => currValue.type === 'dog')
	.map(currValue => currValue.age * 7)
	.reduce((currValue, y) => currValue + y);

console.log(dogs);
