function arraySet(array, key, value) {
    let copy = array.slice(); // 배열 복사
    copy[key] = value; // 행동
    return copy; // 복사한 객체 반환
}

function push(array, value) {
    let copy = array.slice(); // 배열 복사
    copy.push(value); // 행동
    return copy; // 복사한 객체 반환
}

function withArrayCopy(array, action) {
    let copy = array.slice(); // 배열 복사
    action(copy); // 행동
    return copy; // 복사한 객체 반환
}

function arraySet(array, key, value) {
    return withArrayCopy(array, copy => copy[key] = value);
}

function push(array, value) {
    return withArrayCopy(array, copy => copy.push(value));
}