function Person(fname, lname) {
  this.fname = fname;
  this.lname = lname;
  console.log(this instanceof Person); // Ilman new keywordia tulostuu false, muuten true.
}
let Jack = new Person("Jack", "Smith");
console.log(Jack.fname);
console.log(Jack.lname);

let Pauli = new Person("Pauli", "Paulinen");
console.log(Pauli);

let Tiina = Person("Tiina", "Tiinuska"); // Ilman "new":ta tulostaa "undefined".
console.log(Tiina);
