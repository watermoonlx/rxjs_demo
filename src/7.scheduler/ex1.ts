import * as Rx from 'rxjs';

let source$: Rx.Observable<number> = Rx.Observable.create((observer: any) => {
    while (true) {
        observer.next(1);
    }
});

source$.subscribe(i => {
    console.log(i);
});

setInterval(() => {
    console.log('Aha!')
}, 1000);