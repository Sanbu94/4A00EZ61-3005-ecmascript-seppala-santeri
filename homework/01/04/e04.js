var readlineSync = require("readline-sync");

var userName = readlineSync.question("Mikä sun nimi on? ");
var number = readlineSync.question("Anna jokin numero! ");

for (var i = 0; i < number; i++) {
  console.log(userName);
}
