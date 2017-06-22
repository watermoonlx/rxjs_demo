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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUJBQTJCO0FBRTNCLElBQUksUUFBUSxHQUFHO0lBQ1gsSUFBSSxFQUFFLFVBQUMsQ0FBSyxJQUFLLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsR0FBRyxDQUFDLENBQUMsRUFBOUMsQ0FBOEM7SUFDL0QsS0FBSyxFQUFFLFVBQUMsR0FBTyxJQUFLLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsR0FBRyxHQUFHLENBQUMsRUFBOUMsQ0FBOEM7SUFDbEUsUUFBUSxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLHNDQUFzQyxDQUFDLEVBQW5ELENBQW1EO0NBQ3RFLENBQUM7QUFFRixJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUU3QixFQUFFLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDIn0=