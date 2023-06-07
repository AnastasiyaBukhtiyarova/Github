const addImage = (imgSrc, callback) => {
  const pageElement = document.querySelector('.page');
  const imgElem = document.createElement('img');
  imgElem.src = imgSrc;
  imgElem.setAttribute('alt', 'mountains');
  pageElement.append(imgElem);

  const onImageLoaded = () => {
    const { width, height } = imgElem;
    callback(null, { width, height });
  };
  imgElem.addEventListener('load', onImageLoaded);
  imgElem.addEventListener('error', () => callback('Image load fail'));
};
const imgSrc = './mountain.jpg';
const onImageLoaded = (error, imgElem) => {
  if (error) {
    console.log(error);
    return;
  }

  const { width, height } = imgElem;
  const sizeElem = document.querySelector('.image-size');
  sizeElem.textContent = `${width} х ${height}`;
};
addImage(imgSrc, onImageLoaded);
