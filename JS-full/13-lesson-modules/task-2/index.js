const reverseString = (str) => {
  if (str !== String(str)) return null;
  return str.split('').reverse().join('');
};
console.log(reverseString('Ann Lily'));
console.log(reverseString(25));
