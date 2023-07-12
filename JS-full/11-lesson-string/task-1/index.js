const splitText = (str, length = 10) => {
  if (typeof str !== 'string') return null;

  const resultArray = [];
  let start = 0;

  while (true) {
    let chunk = str.substr(start, length);

    if (chunk.length === 0) break;

    resultArray.push(chunk[0].toUpperCase() + chunk.slice(1));
    start += length;
  }
  return resultArray.join('\n');
};
const text = ['weekends', 'summer', 'trips'];
console.log(splitText(text, 4));
