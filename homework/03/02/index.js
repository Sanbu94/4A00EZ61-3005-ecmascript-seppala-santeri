function makeCalculation(a, b) {
  function asynFunc(resolve, reject) {
    if (Math.abs(a) < Number.EPSILON || Math.abs(b) < Number.EPSILON) {
      return reject("Cannot divide by zero!");
    }
    setTimeout(() => {
      console.log("calculating stuff");
      const division = a / b;
      resolve(division);
    }, 1000);
  }
  return new Promise(asynFunc);
}

function sendStuffToBackend(result) {
  function asynFunc(resolve, reject) {
    const random = Math.floor(Math.random() * 2);
    if (random == 0) {
      reject("Failed to connect to backend");
    } else if (random == 1) {
      setTimeout(() => {
        console.log("sending to backend", result);
        resolve("done");
      }, 1000);
    }
  }
  return new Promise(asynFunc);
}

makeCalculation(10, 5)
  .then((division) => sendStuffToBackend(division))
  .then((msg) => console.log(msg))
  .catch((errormsg) => console.log(errormsg));

makeCalculation(10, 5)
  .then((division) => sendStuffToBackend(division))
  .then((msg) => console.log(msg))
  .catch((errormsg) => console.log(errormsg));
