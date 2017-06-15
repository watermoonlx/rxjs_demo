import * as Rx from 'rxjs';

let observable: Rx.Observable<number> =
    Rx.Observable.create((observer: any) => {
        let i = 0;
        setInterval(() => {
            observer.next(i++);
        }, 2000);
    });

setTimeout(() => {
    let subscription1 = observable.subscribe(i => {
        console.log(`subscription 1 : ${i}`);
    });
}, 5000);


let subscription2 = observable.subscribe(i => {
    console.log(`subscription 2 : ${i}`);
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


