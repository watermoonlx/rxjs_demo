import * as Rx from 'rxjs';

let observer = {
    next: (x:any) => console.log('Observer got a next value: ' + x),
    error: (err:any) => console.error('Observer got an error: ' + err),
    complete: () => console.log('Observer got a complete notification'),
};

let a$ = Rx.Observable.of(1);

a$.subscribe(observer);