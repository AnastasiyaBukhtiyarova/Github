'use strict';

class Vehicle {
  constructor(name, numberOfWheels) {
    this.name = name;
    this.numberOfWheels = numberOfWheels;
  }
  move() {
    console.log(`${this.name} is moving`);
  }
  stop() {
    console.log(`${this.name} stopped`);
  }
}
class Ship extends Vehicle {
  constructor(name, MaxSpeed) {
    super(name, false);
    this.MaxSpeed = MaxSpeed;
  }

  move() {
    console.log(`${this.name} lifting anchor up`);
    super.move();
  }
  stop() {
    console.log(`${this.name} lifting anchor down`);
    super.stop();
  }
}
const ship = new Ship('Aurora', 1000);
ship.move();
export { Vehicle, Ship };
