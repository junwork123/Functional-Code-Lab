// Array의 각 요소에 특정 행동을 적용
function foreach(array, action) {
    for (let i = 0; i < array.length; i++) {
        action(array[i]);
    }
}

// Array의 각 요소에 특정 행동을 적용한 결과를 새로운 배열로 반환
function map(array, action) {
    let copy = [];
    foreach(array, item => copy.push(action(item)));
    return copy;
}

// Array의 각 요소 중 특정 조건을 만족하는 요소만을 새로운 배열로 반환
function filter(array, test) {
    let copy = [];
    for (let i = 0; i < array.length; i++) {
        if (test(array[i])) {
            copy.push(array[i]);
        }
    }
    return copy;
}

// Array의 각 요소를 특정 행동을 적용한 결과를 하나의 값으로 축약
function reduce(array, init, action) {
    let accumulator = init;
    for (let i = 0; i < array.length; i++) {
        accumulator = action(accumulator, array[i]);
    }
    return accumulator;
}

let customers = [
    { name: '홍길동', age: 29, email: 'email1@example.com' },
    { name: '이순신', age: 28, email: 'email2@example.com' },
];
map(customers, c => c.email); // ['email1@example.com', 'email2@example.com']

filter(customers, c => c.age > 28); // [{ name: '홍길동', age: 29, email: 'email1@example.com' }]

reduce(customers, 0, (total, c) => total + c.age); // 57

function averageAge(customers) {
    return reduce(customers, 0, (total, c) => total + c.age) / customers.length;
}

averageAge(customers); // 28.5

export { foreach, map, filter, reduce, averageAge };