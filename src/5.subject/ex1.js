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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXgxLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZXgxLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUJBQTJCO0FBRTNCLElBQUksUUFBUSxHQUFHLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBRWhDLFFBQVEsQ0FBQyxTQUFTLENBQUM7SUFDZixJQUFJLEVBQUUsVUFBQSxDQUFDLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFjLENBQUcsQ0FBQyxFQUE5QixDQUE4QjtDQUM1QyxDQUFDLENBQUM7QUFFSCxRQUFRLENBQUMsU0FBUyxDQUFDO0lBQ2YsSUFBSSxFQUFFLFVBQUEsQ0FBQyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBYyxDQUFHLENBQUMsRUFBOUIsQ0FBOEI7Q0FDNUMsQ0FBQyxDQUFDO0FBRUgsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNqQixRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2pCLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMifQ==