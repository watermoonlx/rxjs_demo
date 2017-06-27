import * as Rx from 'rxjs';

let source$ = Rx.Observable.from([1, 2, 3])
    .publish()
    .refCount();

source$.subscribe({
    next: v => console.log(`observerA: ${v}`)
});

source$.subscribe({
    next: v => console.log(`observerB: ${v}`)
});


