function isPositiveInteger(value, onSuccess, onError) {
  if (value > 0) {
    onSuccess();
  } else {
    onError();
  }
}
isPositiveInteger(
  -20,
  () => console.log("Success!"),
  () => console.log("Error!")
);
isPositiveInteger(
  28,
  () => console.log("Success!"),
  () => console.log("Error!")
);
