let rooms = {
  room1: [
    {
      name: 'Jack',
    },
    {
      name: 'Andrey',
    },
    {
      name: 'Ann',
    },
    {
      name: 'Vasyl',
    },
  ],
  room2: [{ name: 'Dan' }],
  room3: [
    {
      name: 'Denis',
    },
    {
      name: 'Max',
    },
    {
      name: 'Alex',
    },
  ],
};

const getPeople = (obj) => {
  return Object.values(obj)
    .reduce((acc, elem) => acc.concat(elem), [])
    .map((elem) => elem.name);
};
console.log(getPeople(rooms));
