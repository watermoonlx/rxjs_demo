import * as Rx from 'rxjs';

function myOp(this: Rx.Observable<any>) {
    let newObservable$ = Rx.Observable.create((observer: any) => {
        this.subscribe({
            next: i => {
                if (i % 2 === 0) {
                    console.log(i);
                    observer.next(i * 10);
                }
            },
            complete: observer.complete(),
            error: err => observer.error(err)
        });
    });

    return newObservable$;
}

(Rx.Observable.prototype as any).myOp = myOp;

let source$ = Rx.Observable.interval(1000);

(source$ as any).myOp();

let newSource$: Rx.Observable<number> = (source$ as any).myOp();

newSource$.subscribe(i => {
    console.log(i);
}); 
