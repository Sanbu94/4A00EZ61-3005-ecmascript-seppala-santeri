function isPositiveInteger(value, onSuccess, onError) {
  if (value > 0) {
    onSuccess();
  } else {
    onError();
  }
}
isPositiveInteger(
  -10,
  () => console.log("Success!"),
  () => console.log("Error!")
);
isPositiveInteger(
  28,
  () => console.log("Success!"),
  () => console.log("Error!")
);
