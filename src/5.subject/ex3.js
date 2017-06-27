"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rx = require("rxjs");
var source$ = Rx.Observable.from([1, 2, 3])
    .publish()
    .refCount();
source$.subscribe({
    next: function (v) { return console.log("observerA: " + v); }
});
source$.subscribe({
    next: function (v) { return console.log("observerB: " + v); }
});
