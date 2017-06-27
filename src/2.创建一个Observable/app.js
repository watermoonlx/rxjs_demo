"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rx = require("rxjs");
var observable = Rx.Observable.create(function (observer) {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    setTimeout(function () {
        observer.next(4);
        observer.complete();
    }, 3000);
});
var subscription = observable.subscribe(function (i) {
    console.log(i);
});
var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(4);
    }, 3000);
});
promise.then(function (i) {
    console.log(i);
});
