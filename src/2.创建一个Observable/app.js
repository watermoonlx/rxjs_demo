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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUJBQTJCO0FBRTNCLElBQUksVUFBVSxHQUNWLEVBQUUsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQUMsUUFBYTtJQUMvQixRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pCLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakIsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqQixVQUFVLENBQUM7UUFDUCxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN4QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDYixDQUFDLENBQUMsQ0FBQztBQUVQLElBQUksWUFBWSxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDO0lBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbkIsQ0FBQyxDQUFDLENBQUM7QUFFSCxJQUFJLE9BQU8sR0FDUCxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO0lBQ3hCLFVBQVUsQ0FBQztRQUNQLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNmLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNiLENBQUMsQ0FBQyxDQUFDO0FBRVAsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUM7SUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ25CLENBQUMsQ0FBQyxDQUFDIn0=