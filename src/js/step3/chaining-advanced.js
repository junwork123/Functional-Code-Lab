import {
    foreach,
    map,
    filter,
    reduce,
} from "./chaining-basic.js";

let customers = [
    { name: '홍길동', age: 29, email: 'email1@example.com', carts: ['A', 'B'] },
    { name: '이순신', age: 28, email: 'email2@example.com', carts: ['C', 'D'] },
];

// Array에서 특정 속성값을 추출하는 함수
function pluck(array, key) {
    return map(array, item => item[key]);
}

// 중첩된 배열을 한 단계 추출(평탄화)하는 함수
function flatMap(arrays) {
    let result = [];
    foreach(arrays, array => {
        foreach(array, item => {
            result.push(item);
        });
    });
    return result;
}

// 고객의 장바구니 목록을 추출해서 평탄화
let allCarts = pluck(customers, 'carts'); // [['A', 'B'], ['C', 'D']]
flatMap(allCarts); // ['A', 'B', 'C', 'D']

function frequenciesBy(array, action) {
    let counts = {};
    foreach(array, item => {
        let key = action(item);
        if (counts[key]) {
            counts[key]++;
        } else {
            counts[key] = 1;
        }
    });
    return counts;
}

function groupBy(array, action) {
    let groups = {};
    foreach(array, item => {
        let key = action(item);
        if (groups[key]) {
            groups[key].push(item);
        } else {
            groups[key] = [item];
        }
    });
    return groups;
}

let products = [
    { name: '사과', price: 2000, type: '과일' },
    { name: '배', price: 3000, type: '과일' },
    { name: '고구마', price: 700, type: '채소' },
    { name: '감자', price: 600, type: '채소' },
    { name: '수박', price: 5000, type: '과일' },
];
let howMany = frequenciesBy(products, product => product.type);
console.log(howMany); // { 과일: 3, 채소: 2 }

let grouped = groupBy(products, product => product.type);
console.log(grouped); // { 과일: [ { name: '사과', price: 2000, type: '과일' }, ... ], 채소: [ ... ] }

// Array를 정렬하는 함수
function sortBy(array, evaluator) {
    let result = [];
    foreach(array, item => {
        result.push(item);
    });
    result.sort((a, b) => evaluator(a, b));
    return result;
}

let sorted = sortBy(products, (a, b) => a.price - b.price);
console.log(sorted); // [ { name: '고구마', price: 700, type: '채소' }, ... ]