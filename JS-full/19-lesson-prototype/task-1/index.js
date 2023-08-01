'use strict';

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
ship.move();
ship.stop();
ship.startMachine();
ship.stopMachine();
export { vehicle, ship };
