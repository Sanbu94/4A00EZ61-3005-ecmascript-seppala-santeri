//CASE 1

function Clock() {
  let x = this;
  this.time = new Date().toString();
  this.startInterval = function () {
    setInterval(function () {
      x.tick();
    }, 1000);
  };
  this.tick = function () {
    this.time = new Date().toString();
    console.log(this.render());
  };
  this.render = function () {
    return this.time;
  };
}

let clock = new Clock();
console.log(clock.render()); // outputs time
clock.startInterval(); // outputs time for every second

//CASE 2

/*function Clock() {
  this.time = new Date().toString();
  this.startInterval = function () {
    setInterval(this.tick, 1000);
  };
  this.tick = () => {
    this.time = new Date().toString();
    console.log(this.render());
  };
  this.render = function () {
    return this.time;
  };
}
let clock = new Clock();
console.log(clock.render()); // outputs time
clock.startInterval(); // outputs time for every second */

//CASE 3

/*function Clock() {
  this.time = new Date().toString();
  this.startInterval = function () {
    setInterval(this.tick, 1000);
  };
  this.tick = function () {
    this.time = new Date().toString();
    console.log(this.render());
  };
  this.render = function () {
    return this.time;
  };
  this.tick = this.tick.bind(this);
}
let clock = new Clock();
console.log(clock.render()); // outputs time
clock.startInterval(); */
