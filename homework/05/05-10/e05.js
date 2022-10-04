function Person(name) {
  this.name = name;
  Person.prototype.sayHello = function () {
    console.log("hello from " + this.name);
  };
}
let jack = new Person("jack");
jack.sayHello();
let tina = new Person("tina");
tina.sayHello();
let santeri = new Person("santeri");

console.log(Object.getPrototypeOf(jack) === Person.prototype);
console.log(Object.getPrototypeOf(tina) === Person.prototype);
console.log(Object.getPrototypeOf(santeri) === Person.prototype);

Person.prototype.drinkBeer = function () {
  console.log(this.name + " drinks beer");
};
tina.drinkBeer();
jack.drinkBeer();

Person.prototype.enjoyBeer = function () {
  console.log(this.name + " haluaa juoda olutta näiden tehtävien jälkeen");
};
santeri.enjoyBeer();
