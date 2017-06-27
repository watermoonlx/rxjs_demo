"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rx = require("rxjs");
// let observable: Rx.Observable<number> =
//     Rx.Observable.create((observer: any) => {
//         console.log(`生成开始！`);
//         let i = 0;
//         setInterval(() => {
//             observer.next(i++);
//         }, 2000);
//     });
// let subscription1 = observable.subscribe(i => {
//     console.log(`subscription 1 : ${i}`);
// });
// setTimeout(() => {
//     let subscription2 = observable.subscribe(i => {
//         console.log(`subscription 2 : ${i}`);
//     });
// }, 5000);
// 同步性
var a$ = Rx.Observable.create(function (observer) {
    console.log('Start!');
    observer.next(123);
    console.log('Done!');
    observer.complete();
});
console.log('订阅前');
a$.subscribe(function (i) {
    console.log("\u6536\u5230\u7684\u503C\u662F " + i);
});
console.log('订阅后');
