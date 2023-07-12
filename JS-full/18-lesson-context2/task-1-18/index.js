'use strict';

const event = {
  guests: [
    {
      name: 'Tom',
      age: 21,
      email: 't@gmail.com',
    },
    {
      name: 'Ann',
      age: 17,
      email: 'a@gmail.com',
    },
  ],
  message: 'Welcome to the party!',
  getInvitations() {
    return this.guests
      .filter(({ age }) => age >= 18)
      .map(({ name, email }) => ({
        email,
        message: `Dear ${name}! ${this.message}`,
      }));
  },
};
console.log(event.getInvitations());
