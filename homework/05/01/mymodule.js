function printName() {
  console.log("Santeri");
}
printName;

function sum(a, b) {
  return a + b;
}

let obj = { printName: printName, sum: sum };
module.exports = obj;

let olio = {
  name: "tiina",
  age: 40,
};

// Create two new variables and set values to be 'tiina' and 40
let { name, age } = olio;
console.log(name); // tiina
console.log(age); // 40
