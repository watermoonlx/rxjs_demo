import * as Rx from 'rxjs';

let subject$ = new Rx.Subject();

subject$.subscribe({
    next: v => console.log(`observerA: ${v}`)
});

subject$.subscribe({
    next: v => console.log(`observerB: ${v}`)
});

subject$.next(1);
subject$.next(2);
subject$.next(3);