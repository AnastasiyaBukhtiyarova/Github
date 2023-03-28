'use strict';

/**
 * @param {function} func
 * @return {function}
 */
function test(a, b) {
  return Math.sqrt(a * a + b * b);
}
function saveFuncCalls(func) {
  const callsHistory = [];
  function withMemory(...args) {
    callsHistory.push(args);
    return func.apply(this, args);
  }

  withMemory.callsHistory = callsHistory;
  return withMemory;
}

//export { saveFuncCalls };
const spyTest = saveFuncCalls(test);
console.log(spyTest(2, 1));
