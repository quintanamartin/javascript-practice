//Turn an array of numbers into a long string of all those numbers.
function stringConcat(arr) {
	const resultado = arr.reduce((a, b) => {
		return a + b;
	}, '');
	return resultado;
}
console.log(stringConcat([1, 2, 3])); // "123"
