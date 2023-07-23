let shoppingCart = [];
let shoppingCartTotal = 0;
let cartItemProperties = {
    name: 'test',
    price: 12345,
}

const defaultProperties = {
    name: '',
    price: 0,
};

// 전역변수(cart)를 읽는 것은 액션이다
function addToCart(cart, defaultProperties, cartItemProperties) {
    let cartItem = makeCartItem(defaultProperties, cartItemProperties);
    cart = addCartItem(cart, cartItem);
    return calculateCartTotal(cart);
}

// 암시적 입출력이 없으므로 계산이다.
function makeCartItem(defaultProperties, cartItemProperties) {
    return makeItem({
        ...defaultProperties,
        ...cartItemProperties,
    });
}

function makeItem(properties) {
    return { ...properties };
}

// 암시적 입출력이 없으므로 계산이다.
function addCartItem(cart, cartItem) {
    // 장바구니 케이스에 맞게 재사용
    return addItemToArray(cart, cartItem);
}

// 암시적 입출력이 없으므로 계산이다.
function addItemToArray(array, item) {
    // 일반적인 상황에서도 사용할 수 있도록 작성
    let newArray = array.slice(); // ★ 배열 복사본으로 계산 ★
    newArray.push(item);
    return newArray;
}

// DOM을 조작하므로 액션이다.
function calculateCartTotal(cart) {
    let totalPrice = calculateTotal(cart);
    setCartTotalDom(totalPrice);
    return totalPrice;
}

// 암시적 입출력이 없으므로 계산이다.
function calculateTotal(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i].price;
    }
    return total;
}

// DOM을 조작하므로 액션이다.
function setCartTotalDom(totalPrice) {
    // DOM manipulation
}

// 전역변수(cart)를 읽어오므로 액션
function removeFromCart(cart, name) {
    let idx = null;
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].name === name) {
            idx = i;
            break;
        }
    }
    if (idx === null) { return cart; }
    return removeCartItem(cart, idx);
}

// 장바구니용 계산으로 작성
function removeCartItem(cart, idx) {
    return removeElement(cart, idx, 1);
}

// 일반적인 상황에서도 사용가능한 불변 계산
function removeElement(array, idx, count) {
    let newArray = array.slice(); // 배열 복사본으로 계산
    newArray.splice(idx, count); // idx 위치에서 count개 만큼 삭제
    return newArray;
}