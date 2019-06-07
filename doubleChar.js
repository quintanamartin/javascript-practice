function doubleChar(str) {
  let strNew = '';
  for (let i = 0; i < str.length; i++) {
    strNew += str[i] + str[i];
  }
  return strNew;
}

console.log(doubleChar('GUACHO'));
