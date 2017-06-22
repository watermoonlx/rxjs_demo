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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXgxLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZXgxLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUJBQTJCO0FBRTNCLElBQUksT0FBTyxHQUEwQixFQUFFLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFDLFFBQWE7SUFDcEUsT0FBTyxJQUFJLEVBQUUsQ0FBQztRQUNWLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckIsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDO0FBRUgsT0FBTyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUM7SUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ25CLENBQUMsQ0FBQyxDQUFDO0FBRUgsV0FBVyxDQUFDO0lBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtBQUN2QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMifQ==