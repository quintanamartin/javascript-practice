let animals = [
  { name: 'Fluffykins', species: 'rabbit' },
  { name: 'Caro', species: 'dog' },
  { name: 'Hamilton', species: 'dog' },
  { name: 'Harold', species: 'fish' },
  { name: 'Ursula', species: 'cat' },
  { name: 'Jimmy', species: 'fish' }
];
//---FILTER---//

let isDog = function(animal) {
  return animal.species === 'dog';
};
const dogs = animals.filter(isDog);
//console.log(dogs);

/*
let dogs = [];
for (let i = 0; i < animals.length; i++) {
  if (animals[i] === 'dogs') {
    dogs.push(animals[i]);
  }
}
*/

//---MAP---//
/*
let names = animals.map(function(animal) {
  return animal.name;
});
*/
let names = animals.map(animal => animal.name);

/*let names = animals.map(function(animal) {
  return `${animal.name} is a ${animal.species}`;
});
*/
/*
let names = [];
for(let i = 0; i < animals.length; i++){
    names.push(animals[i].name);
}
*/
//console.log(names);

//---MAP---//
let orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 }
];

let totalAmount = orders.reduce((sum, order) => {
  return sum + order.amount;
}, 0);

/*
let totalAmount = 0;
for (let i = 0; i < orders.length; i++) {
  totalAmount += orders[i].amount;
}
*/
console.log(totalAmount);
