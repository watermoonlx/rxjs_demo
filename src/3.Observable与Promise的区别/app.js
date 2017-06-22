"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rx = require("rxjs");
var observable = Rx.Observable.create(function (observer) {
    var i = 0;
    setInterval(function () {
        observer.next(i++);
    }, 2000);
});
setTimeout(function () {
    var subscription1 = observable.subscribe(function (i) {
        console.log("subscription 1 : " + i);
    });
}, 5000);
var subscription2 = observable.subscribe(function (i) {
    console.log("subscription 2 : " + i);
});
// let promise: Promise<number> =
//     new Promise((resolve, reject) => {
//         console.log(`生成开始！`);
//         setTimeout(() => {
//             resolve(4);
//         }, 3000);
//     });
// setTimeout(() => {
//     console.log(`消费开始！`)
//     promise.then(i => {
//         console.log(`then 1: ${i}`);
//     });
// }, 5000);
// promise.then(i => {
//     console.log(`then 1: ${i}`);
//     console.log(i);
// });
//同步性
// let a$ = Rx.Observable.create((observer: any) => {
//     console.log('Start!');
//     observer.next(123);
//     console.log('Done!');
//     observer.complete();
// });
// console.log('订阅前');
// a$.subscribe((i: any) => {
//     console.log(`收到的值是 ${i}`);
// });
// console.log('订阅后');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUJBQTJCO0FBRTNCLElBQUksVUFBVSxHQUNWLEVBQUUsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQUMsUUFBYTtJQUMvQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDVixXQUFXLENBQUM7UUFDUixRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdkIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ2IsQ0FBQyxDQUFDLENBQUM7QUFFUCxVQUFVLENBQUM7SUFDUCxJQUFJLGFBQWEsR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLFVBQUEsQ0FBQztRQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFvQixDQUFHLENBQUMsQ0FBQztJQUN6QyxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUdULElBQUksYUFBYSxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDO0lBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQW9CLENBQUcsQ0FBQyxDQUFDO0FBQ3pDLENBQUMsQ0FBQyxDQUFDO0FBRUgsaUNBQWlDO0FBQ2pDLHlDQUF5QztBQUN6QyxnQ0FBZ0M7QUFDaEMsNkJBQTZCO0FBQzdCLDBCQUEwQjtBQUMxQixvQkFBb0I7QUFDcEIsVUFBVTtBQUdWLHFCQUFxQjtBQUNyQiwyQkFBMkI7QUFDM0IsMEJBQTBCO0FBQzFCLHVDQUF1QztBQUN2QyxVQUFVO0FBQ1YsWUFBWTtBQUVaLHNCQUFzQjtBQUN0QixtQ0FBbUM7QUFDbkMsc0JBQXNCO0FBQ3RCLE1BQU07QUFHTixLQUFLO0FBQ0wscURBQXFEO0FBQ3JELDZCQUE2QjtBQUM3QiwwQkFBMEI7QUFDMUIsNEJBQTRCO0FBQzVCLDJCQUEyQjtBQUMzQixNQUFNO0FBRU4sc0JBQXNCO0FBQ3RCLDZCQUE2QjtBQUM3QixpQ0FBaUM7QUFDakMsTUFBTTtBQUNOLHNCQUFzQiJ9