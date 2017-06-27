import * as Rx from 'rxjs';

// let observable: Rx.Observable<number> =
//     Rx.Observable.create((observer: any) => {
//         console.log(`生成开始！`);
//         let i = 0;
//         setInterval(() => {
//             observer.next(i++);
//         }, 2000);
//     });

// let subscription1 = observable.subscribe(i => {
//     console.log(`subscription 1 : ${i}`);
// });

// setTimeout(() => {
//     let subscription2 = observable.subscribe(i => {
//         console.log(`subscription 2 : ${i}`);
//     });
// }, 5000);







// 同步性
let a$ = Rx.Observable.create((observer: any) => {
    console.log('Start!');
    observer.next(123);
    console.log('Done!');
    observer.complete();
});

console.log('订阅前');
a$.subscribe((i: any) => {
    console.log(`收到的值是 ${i}`);
});
console.log('订阅后');


