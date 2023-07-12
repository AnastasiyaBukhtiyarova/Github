'use strict';

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }
  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`);
  }
  setAge(age) {
    if (this.age >= 25) {
      return `New photo request was sent for ${this.name}`;
    }
    if (this.age < 0) {
      return false;
    }
    if (this.age > 0 && this.age < 25) return this.age;
  }
  static createEmpty(name, age) {
    return new User('', null);
  }
}
const user0 = new User('Mavka', -1);
const user1 = new User('Mavka', 25);
const user2 = new User('Mavka', 16);
console.log(User.createEmpty());
console.log(User.setAge);
console.log(User.setAge);
console.log(User.setAge);

export { User };
