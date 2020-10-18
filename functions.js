'use strict';
// Functions
// Область видимости
// Лексическая область видимости
const a = 0;
{
    const b = 10;
    console.log(a);
}
console.log(b);
// 1. Function declaration
function test (a)  {
    console.log(a)
}
// 2. Function expression
const test1 = function(a) {
    console.log(a)
};
// Arrow functions
const test2 = a => a+10;
const test3 = (a, b) => {
    console.log(a + b);
};
const test4 = a => ({
    a
})
// 3 NFE - for recursive
let test5 = function testName (a) {
    if (a === 1) {
        return 1
    } else {
        return a * testName(a-1)
    }
}
const newtest = test5;
test5 = null;
newtest(10);
// 4 IIFE
const r = 20;
;(() => console.log(r))();
// Context
const myfunc = a => console.log(this)
myfunc()
// VM161:1 Window {0: Window, window: Window, self: Window, document: document, name: "", location: Location, …}
const obj = {}
const obj1 = {
    meth: myfunc
}
obj1.meth()
// VM161:1 Window {0: Window, window: Window, self: Window, document: document, name: "", location: Location, …}
const func1 = function () {console.log(this); return this;}
func1()
// VM411:1 Window {0: Window, window: Window, self: Window, document: document, name: "", location: Location, …}
// Window {0: Window, window: Window, self: Window, document: document, name: "", location: Location, …}
obj1.meth1 = func1
obj1.meth1()
// VM411:1 {meth: ƒ, meth1: ƒ}
obj1.meth()
// VM161:1 Window {0: Window, window: Window, self: Window, document: document, name: "", location: Location, …}
obj1.meth3 = function () {
    const r = () => {
        console.log(this)
    }
    const obj3 = {r}
    obj3.r()
}
obj1.meth3()
// VM793:3 {meth: ƒ, meth1: ƒ, meth3: ƒ}
obj1.meth4 = function () {
    const r2 = function () {
        console.log(this)
    }
    const obj4 = {r2}
    obj4.r2()
}
obj1.meth4()
// VM868:3 {r2: ƒ}

// Callback Functions
const searchIndex = (arr, callback) => {
    let index = 0;
    for (let el of arr) {
        if (callback(el, index)) return index ;
        index ++;
    }
}
const arr = [1,2,3,4,5,5,4,3,2,1];
const i = searchIndex(arr, (el) => el === 5);
console.log(i);

// Promises and async
const getData = function (callback) {
    const data = {
        a: 10,
        b: 20
    };
    setTimeout(callback, 5000, data);
}

// Promises
const myPromise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 10000, 50)
})
const myPromise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 10000, 10)
})
myPromise1.then(data => myPromise2).then(data => console.log(data)).catch(e => console.log(e))

const getDataPromise = () => new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, 20);
})
const getDataPromise1 = a => new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, 20 + a);
})
getDataPromise().then(data => console.log(data))
getDataPromise().then(data => getDataPromise1(data)).then(result => console.log(result))

// Async

const getDataAsync = async () => {
    return 40
}
const getDataAsync1 = async a => {
    const result = await getDataAsync();
    return result + a
}
const getDataAsync3 = async () => {
    const res1 = await getDataAsync()
    const res2 = await getDataAsync1(res1)
    console.log(res2);
}
getDataAsync3();
