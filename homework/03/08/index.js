const fetch = require("node-fetch");
//const readlineSync = require("readline-sync");

async function fetchTitle(id) {
  const characterInfo = await fetch(`https://swapi.dev/api/people/${id}/`);
  const characterObject = await characterInfo.json();
  const movieInfo = await fetch(characterObject.films[id]);
  const movieObject = await movieInfo.json();
  return movieObject.title;
}

//let userInput = readlineSync.question("Give id: ");
fetchTitle(1).then((title) => console.log(title));
