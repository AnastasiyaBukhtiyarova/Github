const addImage = (imgSrc) => {
  const p = new Promise((resolve, reject) => {
    const pageElem = document.querySelector('.page');
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'picture');
    imgElem.src = imgSrc;
    pageElem.append(imgElem);

    const onImageLoaded = () => {
      const { width, height } = imgElem;
      resolve({ width, height });
    };
    imgElem.addEventListener('load', onImageLoaded);
    imgElem.addEventListener('error', () =>
      reject(new Error('Image load is failed...'))
    );
  });
  return p;
};
