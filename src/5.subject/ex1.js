"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rx = require("rxjs");
var subject$ = new Rx.Subject();
subject$.subscribe({
    next: function (v) { return console.log("observerA: " + v); }
});
subject$.subscribe({
    next: function (v) { return console.log("observerB: " + v); }
});
subject$.next(1);
subject$.next(2);
subject$.next(3);
