"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rx = require("rxjs");
var source$ = Rx.Observable.from([1, 2, 3])
    .publish();
source$.subscribe({
    next: function (v) { return console.log("observerA: " + v); }
});
source$.subscribe({
    next: function (v) { return console.log("observerB: " + v); }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXgzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZXgzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUJBQTJCO0FBRTNCLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUN0QyxPQUFPLEVBQUUsQ0FBQztBQUVmLE9BQU8sQ0FBQyxTQUFTLENBQUM7SUFDZCxJQUFJLEVBQUUsVUFBQSxDQUFDLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFjLENBQUcsQ0FBQyxFQUE5QixDQUE4QjtDQUM1QyxDQUFDLENBQUM7QUFFSCxPQUFPLENBQUMsU0FBUyxDQUFDO0lBQ2QsSUFBSSxFQUFFLFVBQUEsQ0FBQyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBYyxDQUFHLENBQUMsRUFBOUIsQ0FBOEI7Q0FDNUMsQ0FBQyxDQUFDIn0=