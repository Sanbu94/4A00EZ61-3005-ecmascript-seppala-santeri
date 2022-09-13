const person = { name: "Tina", age: 28 };

let text = "";
for (let x in person) {
  text += person[x] + " ";
}
console.log(text);
