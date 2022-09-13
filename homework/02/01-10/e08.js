function doIt() {
  console.log("hello");
}
console.log(typeof doIt);
console.log(doIt instanceof Function);

// The typeof operator returns a string indicating the type of the unevaluated operand.
// Palauttaa muuttujan tyypin.

// The instanceof operator tests to see if the prototype property of a constructor appears
// anywhere in the prototype chain of an object. The return value is a boolean value.
// Palauttaa "true" koska koodissa on funktio, muuten palauttaisi "false".
