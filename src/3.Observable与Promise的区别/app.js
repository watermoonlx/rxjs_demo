"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rx = require("rxjs");
var observable = Rx.Observable.create(function (observer) {
    var i = 0;
    setInterval(function () {
        observer.next(i++);
    }, 2000);
});
setTimeout(function () {
    var subscription1 = observable.subscribe(function (i) {
        console.log("subscription 1 : " + i);
    });
}, 5000);
var subscription2 = observable.subscribe(function (i) {
    console.log("subscription 2 : " + i);
});
// let promise: Promise<number> =
//     new Promise((resolve, reject) => {
//         console.log(`生成开始！`);
//         setTimeout(() => {
//             resolve(4);
//         }, 3000);
//     });
// setTimeout(() => {
//     console.log(`消费开始！`)
//     promise.then(i => {
//         console.log(`then 1: ${i}`);
//     });
// }, 5000);
// promise.then(i => {
//     console.log(`then 1: ${i}`);
//     console.log(i);
// });
