"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rx = require("rxjs");
var source$ = Rx.Observable.interval(1000);
var newSource$ = source$
    .filter(function (i) { return i % 2 === 0; })
    .map(function (i) { return i * 10; });
newSource$.subscribe(function (i) {
    console.log(i);
});
