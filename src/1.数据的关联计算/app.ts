import * as Rx from 'rxjs';

const a$ = new Rx.Subject<number>();
const b$ = new Rx.Subject<number>();

const c$ = Rx.Observable
    .combineLatest(a$, b$)
    .map(([a, b]) => {
        return a + b;
    });

a$.subscribe(i => {
    console.log(`a=${i}`);
});

b$.subscribe(i => {
    console.log(`b=${i}`);
});

c$.subscribe(i => {
    console.log(`c=${i}`);
    console.log(`---------------------`);
});


//初始化
console.log(`初始化：`);
a$.next(1);
b$.next(2);

setTimeout(() => {
    console.log(`更新: `);
    a$.next(10);
}, 2000);

setTimeout(() => {
    console.log(`更新: `);
    b$.next(99);
}, 5000);