const addImage = (imgSrc) => {
  const promise = new Promise((resolve, reject) => {
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'mountains');
    imgElem.src = imgSrc;
    const containerElem = document.querySelector('.page');
    containerElem.append(imgElem);

    function onImageLoaded() {
      const { width, height } = imgElem;
      resolve({ width, height });
      console.log(`${width} х ${height}`);
    }

    imgElem.addEventListener('load', onImageLoaded);

    imgElem.addEventListener('error', () => {
      reject(new Error('Image load failed'));
    });
  });

  return promise;
};

const imgSrc = './mountain.jpg';
const result = addImage(imgSrc);
result.catch((load) => console.log(load));
