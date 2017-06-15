import * as Rx from 'rxjs';

let observable: Rx.Observable<number> =
    Rx.Observable.create((observer: any) => {
        observer.next(1);
        observer.next(2);
        observer.next(3);
        setTimeout(() => {
            observer.next(4);
            observer.complete();
        }, 3000);
    });

let subscription = observable.subscribe(i => {
    console.log(i);
});

let promise: Promise<number> =
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(4);
        }, 3000);
    });

promise.then(i => {
    console.log(i);
});


