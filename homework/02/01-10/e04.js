function isPositiveInteger(value, onSuccess, onError) {
  if (value > 0) {
    onSuccess();
  } else {
    onError();
  }
}

function f1() {
  console.log("Number is positive!");
}

function f2() {
  console.log("Number is negative!");
}

isPositiveInteger(28, f1, f2);
