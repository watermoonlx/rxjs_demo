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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXgxLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZXgxLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUJBQTJCO0FBRTNCLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRTNDLElBQUksVUFBVSxHQUFHLE9BQU87S0FDbkIsTUFBTSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQVgsQ0FBVyxDQUFDO0tBQ3hCLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsR0FBRyxFQUFFLEVBQU4sQ0FBTSxDQUFDLENBQUM7QUFFdEIsVUFBVSxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUM7SUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNuQixDQUFDLENBQUMsQ0FBQyJ9