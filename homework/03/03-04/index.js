const f = require("fs");
const rs = require("readline-sync");

let name = rs.question("Give file name: ");

function read(content) {
  f.readFile(content, "utf-8", (err, data) => {
    if (!err) {
      try {
        const obj = JSON.parse(data);
        if ("name" in obj) {
          return console.log(obj.name);
        } else {
          console.log("object contains json but not name");
        }
      } catch (err) {
        console.log(`file ${content} does not contain json`);
      }
    } else {
      console.log(`file ${name} does not exist`);
    }
  });
}

read(name);
