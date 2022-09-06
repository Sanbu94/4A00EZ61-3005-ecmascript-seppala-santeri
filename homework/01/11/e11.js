const cars = ["Alfa Romeo ", "BMW ", "Kia ", "Mercedes Benz ", "Volkswagen"];

let text = "";
for (let i = 0; i < cars.length; i++) {
  text += cars[i];
  console.log(text);
}

const carlist = ["Alfa Romeo ", "BMW ", "Kia ", "Mercedes Benz ", "Volkswagen"];
let list = "";
for (let x of carlist) {
  list += x;
  console.log(list);
}
