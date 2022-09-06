var readlineSync = require("readline-sync");

var userName = readlineSync.question("Mikä sun nimi on? ");
console.log("Morjens " + userName + "!");
