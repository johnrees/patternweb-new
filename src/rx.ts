// import * as Rx from "rxjs";
const Rx = require("rxjs");

const add = (a, b) => a + b;

const a0$ = Rx.Observable.of(10);
const a1$ = Rx.Observable.of(14);

const b1$ = Rx.Observable.combineLatest(a0$, a1$, add);

const b2$ = Rx.Observable.of(10);

const c1$ = Rx.Observable.combineLatest(b1$, b2$, add);

c1$.subscribe(console.log);
