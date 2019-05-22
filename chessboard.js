let row = "";
let size = 16;

for (j = 0; j < size; j++) {
  for (i = 0; i < size; i++) {
    if ((j + i) % 2 === 0) {
      row += "#";
    } else {
      row += " ";
    }
  }
  row += "\n";
}
console.log(row);
