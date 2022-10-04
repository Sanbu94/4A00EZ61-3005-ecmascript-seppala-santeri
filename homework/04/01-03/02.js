doIt(false)(); // outputs hello
doIt(true)(); // outputs world

function doIt(value) {
  return value ? () => console.log("world") : () => console.log("hello");
}
