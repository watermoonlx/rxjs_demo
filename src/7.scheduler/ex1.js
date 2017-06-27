"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rx = require("rxjs");
var source$ = Rx.Observable.create(function (observer) {
    while (true) {
        observer.next(1);
    }
});
source$.subscribe(function (i) {
    console.log(i);
});
setInterval(function () {
    console.log('Aha!');
}, 1000);
