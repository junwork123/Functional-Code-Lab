// 객체를 복사하는 함수(이전에 작성했던 함수)
function objectSet(obj, key, value) {
    let copy = obj.assign({}, obj); // 객체 복사
    obj[key] = value;
    return copy;
}

// 객체를 수정하는 함수
function update(obj, key, modify) {
    let oldValue = obj[key];
    let newValue = modify(oldValue);
    return objectSet(obj, key, newValue); // 객체 복사
}

// 3겹으로 중첩된 데이터 구조(cart -> shirt -> options)
let cart = {
    shirt: {
        name: 'shirt',
        price: 10000,
        quantity: 2,
        options: {
            color: 'white',
            size: 'L'
        }
    },
}

// 옵션에서 사이즈를 수정하는 함수
function updateSize(item, newSize) {
    return update(item, 'options', (options) => {
        return update(options, 'size', () => {
            return newSize;
        });
    });
}

// 카트에서 셔츠의 사이즈를 수정하는 함수
function updateShirtSizeInCart(cart, newSize) {
    return update(cart, 'shirt', (shirt) => {
        return updateSize(shirt, newSize);
    });
}

console.log(updateShirtSizeInCart(cart, 'XL'));