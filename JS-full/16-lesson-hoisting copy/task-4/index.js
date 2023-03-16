/* eslint-disable */

/* Начальный код для этой задачи написан с плохими практиками, такими как использования var, 
переопределение переменной и тд. Это сделано намерено чтобы разобрать работу var.
Чтобы eslint не ругался на ошибки, для этой задачи он отключен аннотацией eslint-disable */

var foo = 1;
console.log(foo);
function bar() {
  if (!foo) {
    let foo = 10;
  }

  return foo;
}
console.log(bar());
var foo = bar();
export default bar();
