export const addImage = (url, callback) => {
  const img = document.createElement('img');
  img.setAttribute('alt', 'mountain');
  img.src = url;

  const pageElem = document.querySelector('.page');
  pageElem.append(img);

  const onImageLoaded = () => {
    const { width, height } = img;
    callback(null, { width, height });
  };

  const onImageLoadError = () => callback('Image load failed');

  img.addEventListener('load', onImageLoaded);

  img.addEventListener('error', onImageLoadError);
};

const imgPath = './mountain.jpg';
export const addImageV2 = (imgSrc) => {
  return new Promise((resolve, reject) => {
    const callback = (error, success) => {
      if (error) {
        reject(error);
      } else {
        resolve(success);
      }
    };
    addImage(imgSrc, callback);
  });
};
const res = addImageV2(imgPath);
res.then((data) => console.log(data)); // ==> { width: 200, height: 100 }
res.catch((error) => console.log(error)); // ==> 'Image load failed'
