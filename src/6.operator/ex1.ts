import * as Rx from 'rxjs';

let source$ = Rx.Observable.interval(1000);

let newSource$ = source$
    .filter(i => i % 2 === 0)
    .map(i => i * 10);

newSource$.subscribe(i => {
    console.log(i);
}); 
