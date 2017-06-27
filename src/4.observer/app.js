"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rx = require("rxjs");
var observer = {
    next: function (x) { return console.log('Observer got a next value: ' + x); },
    error: function (err) { return console.error('Observer got an error: ' + err); },
    complete: function () { return console.log('Observer got a complete notification'); },
};
var a$ = Rx.Observable.of(1);
a$.subscribe(observer);
