const getOwnProps = (obj) => {
  for (let properties in obj) {
    if (obj.hasOwnProperties(properties)) {
      return properties;
    }
  }
};
const user1 = {
  cat() {
    console.log(`${this.name} is a good cat`);
  },
};
const user = {
  name: 'Tom',
  age: 20,
};
Object.setPrototypeOf(user, user1);
getOwnProps(user.cat());
console.log(getOwnProps(user1));
