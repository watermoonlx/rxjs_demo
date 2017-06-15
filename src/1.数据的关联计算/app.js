"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rx = require("rxjs");
var a$ = new Rx.Subject();
var b$ = new Rx.Subject();
var c$ = Rx.Observable
    .combineLatest(a$, b$)
    .map(function (_a) {
    var a = _a[0], b = _a[1];
    return a + b;
});
a$.subscribe(function (i) {
    console.log("a=" + i);
});
b$.subscribe(function (i) {
    console.log("b=" + i);
});
c$.subscribe(function (i) {
    console.log("c=" + i);
    console.log("---------------------");
});
//初始化
console.log("\u521D\u59CB\u5316\uFF1A");
a$.next(1);
b$.next(2);
setTimeout(function () {
    console.log("\u66F4\u65B0: ");
    a$.next(10);
}, 2000);
setTimeout(function () {
    console.log("\u66F4\u65B0: ");
    b$.next(99);
}, 5000);
