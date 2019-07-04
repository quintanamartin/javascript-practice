//1) Turn an array of numbers into a total of all the numbers
function total(arr) {
  const total = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });
  return total;
}

console.log(total([1, 2, 3])); // 6
