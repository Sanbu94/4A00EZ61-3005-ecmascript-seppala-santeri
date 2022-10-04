class Person {
  constructor(name) {
    this.name = name;
    this.drinkBeer = function () {
      console.log(this.name + " drinks beer"); // kerran muistissa
    };
  }
  sayHello() {
    console.log("hello from " + this.name);
  }
}

let jack = new Person("jack");
jack.sayHello();
jack.drinkBeer();
let tina = new Person("tina");
tina.sayHello();
tina.drinkBeer();
