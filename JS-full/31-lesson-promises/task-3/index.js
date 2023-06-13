const successPromise = new Promise((resolve) => {
  resolve(32);
});

/*
 * исправь цепочку промисов, чтобы в последнем обработчике вывелось нужное число
 */

successPromise
  .then((number) => {
    const halfNumber = number / 2;
    return halfNumber;
  })
  .then((number) => {
    /* fix this handler */
    const squaredNumber = number * number;
    return squaredNumber;
  })
  .then((result) => {
    console.log(result); // 256
  });

/*
 * исправь цепочку промисов, чтобы в последнем обработчике вывелось нужное число
 */
successPromise
  .then((number) => {
    /* fix this handler */
    return number * 10;
  })
  .then((result) => {
    console.log(result); // 320
  });

console.log(
  '!!! Обрати внимание, что этот текст вывелся самым первым. Ведь это синхронный код, а промисы - асинхронны !!!'
);

// part 2

const serverResponsePromise = new Promise((resolve) => {
  const serverResponse = {
    ok: true,
    json() {
      return Promise.resolve({
        name: 'John',
        age: 20,
      });
    },
  };
  resolve(serverResponse);
});

/*
 * допиши первый обработчик, чтобы во второй попал объект пользователя
 */

serverResponsePromise
  .then((response) => {
    /* ...code here */
    return response.json();
  })
  .then((result) => {
    console.log(result); // { name: 'John', age: 20 }
  });

console.log(
  '!!! Обрати внимание, что этот текст вывелся самым первым. Ведь это синхронный код, а промисы - асинхронны !!!'
);

//part 3

const delay = (time) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done');
    }, time);
  });
  return promise;
};
delay(3000).then((data) => console.log(data));
