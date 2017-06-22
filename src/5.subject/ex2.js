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
var observable$ = Rx.Observable.from([1, 2, 3]);
observable$.subscribe(subject$);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXgyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZXgyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUJBQTJCO0FBRTNCLElBQUksUUFBUSxHQUFHLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBRWhDLFFBQVEsQ0FBQyxTQUFTLENBQUM7SUFDZixJQUFJLEVBQUUsVUFBQSxDQUFDLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFjLENBQUcsQ0FBQyxFQUE5QixDQUE4QjtDQUM1QyxDQUFDLENBQUM7QUFFSCxRQUFRLENBQUMsU0FBUyxDQUFDO0lBQ2YsSUFBSSxFQUFFLFVBQUEsQ0FBQyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBYyxDQUFHLENBQUMsRUFBOUIsQ0FBOEI7Q0FDNUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDaEQsV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyJ9