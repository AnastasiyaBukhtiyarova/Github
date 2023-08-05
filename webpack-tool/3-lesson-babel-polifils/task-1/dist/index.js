"use strict";

require("core-js/modules/es7.promise.finally.js");
require("core-js/modules/es6.object.to-string.js");
require("core-js/modules/es6.promise.js");
var data = [1, 2, [(3, 4, [5, 6])]];
var result = data.flat(2);
console.log(result);
Promise.resolve().finally();