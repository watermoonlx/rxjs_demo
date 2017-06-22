import * as Rx from 'rxjs';

let subject$ = new Rx.Subject();

subject$.subscribe({
    next: v => console.log(`observerA: ${v}`)
});

subject$.subscribe({
    next: v => console.log(`observerB: ${v}`)
});

let observable$ = Rx.Observable.from([1, 2, 3]);
observable$.subscribe(subject$);