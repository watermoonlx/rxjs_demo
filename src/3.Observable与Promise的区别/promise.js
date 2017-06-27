"use strict";
var promise = new Promise(function (resolve, reject) {
    console.log("\u751F\u6210\u5F00\u59CB\uFF01");
    resolve(4);
});
promise.then(function (i) {
    console.log("\u6D88\u8D39\u5F00\u59CB\uFF01");
    console.log("then 1: " + i);
    console.log(i);
});
console.log('Done!');
