export const user = {
  firstName: 'Bill',
  lastName: 'Moor',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  setFullName(fName) {
    const [firstName, lastName] = fName.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
  },
};
user.getFullName();
