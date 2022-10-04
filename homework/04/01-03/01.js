let f = doIt();
f();

function doIt() {
  return function () {
    console.log("hello world");
  };
}
