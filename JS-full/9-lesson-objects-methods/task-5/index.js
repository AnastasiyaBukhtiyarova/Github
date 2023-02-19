/* eslint-disable prefer-object-spread */

/* В решения этой задачи используется метод Object.assign. В реальных проектах для такой задачи
 * лучше использовать spread опертор - это самый современный подход
 *
 * Задачу мы делаем для практики и демонстрационных целей, поэтому чтобы eslint не ругался на эту ошибку,
 * для этой задачи он отключен аннотацией eslint-disable
 * */

function mergeObjectsV1(obj1, obj2) {
  // put your code here

  const res = Object.assign(obj1, obj2);
  return res;
}

function mergeObjectsV2(obj1, obj2) {
  // put your code here
  const res = Object.assign(obj2, obj1);
  return res;
}

function mergeObjectsV3(obj1, obj2) {
  // put your code here
  const { ...object1 } = obj1;
  const { ...object2 } = obj2;
  const res = Object.assign({ ...object1 }, { ...object2 });
  return res;
}

function mergeObjectsV4(obj1, obj2) {
  // put your code here
  const { ...object1 } = obj1;
  const { ...object2 } = obj2;
  const res = Object.assign({ ...object2 }, { ...object1 });
  return res;
}

const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  student: false,
};
console.log(mergeObjectsV1(obj1, obj2));
console.log(mergeObjectsV2(obj1, obj2));
console.log(mergeObjectsV3(obj1, obj2));
console.log(mergeObjectsV4(obj1, obj2));
