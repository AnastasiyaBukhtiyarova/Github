'use strict';
function getOwnProps(obj) {
  let arrOfKeys = [];
  for (let keys in obj) {
    if (obj.hasOwnProperty(keys) && typeof obj[keys] != 'function')
      arrOfKeys.push(keys);
  }
  return arrOfKeys;
}

const vehicle = {
  move() {
    console.log(`${this.name} is moving`);
  },
  stop() {
    console.log(`${this.name} stopped`);
  },
};
const ship = {
  name: 'Argo',
  age: 17,
  startMachine() {
    console.log(`${this.name} lifting anchor up`);
    ship.move();
  },
  stopMachine() {
    console.log(`${this.name} lifting anchor down`);
    ship.stop();
  },
};
Object.setPrototypeOf(ship, vehicle);
console.log(getOwnProps(ship));
export { getOwnProps };
