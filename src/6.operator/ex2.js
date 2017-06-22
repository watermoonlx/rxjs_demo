"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rx = require("rxjs");
function myOp() {
    var _this = this;
    var newObservable$ = Rx.Observable.create(function (observer) {
        _this.subscribe({
            next: function (i) {
                if (i % 2 === 0) {
                    console.log(i);
                    observer.next(i * 10);
                }
            },
            complete: observer.complete(),
            error: function (err) { return observer.error(err); }
        });
    });
    return newObservable$;
}
Rx.Observable.prototype.myOp = myOp;
var source$ = Rx.Observable.interval(1000);
source$.myOp();
var newSource$ = source$.myOp();
newSource$.subscribe(function (i) {
    console.log(i);
});
//# sourceMappingURL=ex2.js.map