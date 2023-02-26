const sortContacts = (contacts) => {
  if (!Array.isArray) return null;
  const res = contacts.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  return res;
};
const contacts = [
  {
    name: 'Tom',
    number: 123456,
  },
  {
    name: 'Ana',
    number: 012356,
  },
  {
    name: 'Julia',
    number: 85694,
  },
];
console.log(sortContacts(contacts));
