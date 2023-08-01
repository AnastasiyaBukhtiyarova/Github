/* здесь мы создаем промис, который резолвит объект { name: 'Tom', age: 17 } через 1 секунду */
const userDataPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve({ name: 'Tom', age: 17 });
  }, 1000);
});

/*
 * Выведи в консоль переменную userDataPromise
 * Ответь себе на вопрос, какой тип данных имеет переменная userDataPromise?
 */

/* ...code here */
console.log(userDataPromise);
/*
 * Выведи в консоль переменную userData в обработчике промиса
 * Ответь себе на вопрос, что находится в переменной userData?
 */
userDataPromise.then(function onSuccess(userData) {
  /* ...code here */
  console.log(userData);
});

/*
 * Подпишись на успешное выполнение промиса userDataPromise
 * Используй метод .then в обработчике промиса (ф-ция внутри .then()) и выведи в консоль
 * строку 'My name is Tom. I am 17 years old'
 * Tom и 17 достань с данных, которые приходят в ф-цию onSuccess
 */

userDataPromise.then(function onSuccess(userDataPromise) {
  /* ...code here */
  console.log(
    `My name is ${userDataPromise.name}. I am ${userDataPromise.age} years old`
  );
});

/* ===> 1 <=== */

/*
 * successPromise должен зарезолвить число 67
 * Ответьте себе на вопрос, какой тип данных имеет переменная successPromise
 */

const successPromise = new Promise((resolve) => {
  /* ...code here */
  const num = 67;
  console.log(num);
  resolve(num);
});

/*
 * допишите обработчик успешного промиса (аргументы и тело ф-ции onSuccess)
 * чтобы в консоль вывелся квадрат числа, которое резолвиться из successPromise
 */

successPromise.then(function onSuccess(number) {
  /* ...code here */
  console.log(number * number);
});

/*
 * в обработчике ошибок промиса (ф-ция onError внутри .catch()) выведите в консоль текст 'I am an error'
 * текст вывелся в консоль?
 * подумайте почему
 */
successPromise.catch(function onError() {
  console.log('I am an error');

  /* ...code here */
});

/*
 * failedPromise должен зареджектить ошибку new Error('Oops, error!');
 * Ответьте себе на вопрос, какой тип данных имеет переменная failedPromise
 */

/*
 * failedPromise должен зареджектить ошибку new Error('Oops, error!');
 * Ответьте себе на вопрос, какой тип данных имеет переменная failedPromise
 */

const failedPromise = new Promise((resolve, reject) => {
  /* ...code here */
  reject(new Error('Oops, error!'));
});

/*
 * выведите в консоль ошибку в ф-ции onError
 */

failedPromise.catch(function onError(error) {
  /* ...code here */
  console.log(error);
});
