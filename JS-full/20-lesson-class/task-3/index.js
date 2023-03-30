'use strict';

function User(name, age) {
  this.name = name;
  this.age = age;
}
User.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
};
User.prototype.requestNewPhoto = function () {
  console.log(`New photo request was sent for ${this.name}`);
};
User.prototype.setAge = function (age) {
  if (this.age >= 25) {
    return `New photo request was sent for ${this.name}`;
  }
  if (this.age < 0) {
    return false;
  }
  if (this.age > 0 && this.age < 18) return this.age;
};

const user0 = new User('Mavka', -1);
const user1 = new User('Mavka', 25);
const user2 = new User('Mavka', 16);
console.log(user0.setAge());
console.log(user1.setAge());
console.log(user2.setAge());

//export { User };
