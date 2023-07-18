let shoppingCart = [];
let shoppingCartTotal = 0;

// 전역변수(cart)를 읽는 것은 액션이다
function addToCart(cart, name, price) {
    let cartItem = makeCartItem(name, price);
    cart = addCartItem(cart, cartItem);
    return calculateCartTotal(cart);
}

// 암시적 입출력이 없으므로 계산이다.
function makeCartItem(name, price) {
    return {
        name: name,
        price: price
    };
}

// 암시적 입출력이 없으므로 계산이다.
function addCartItem(cart, cartItem) {
    // 장바구니 케이스에 맞게 재사용
    return addElementLast(cart, cartItem);
}

// 암시적 입출력이 없으므로 계산이다.
function addElementLast(array, element) {
    // 일반적인 상황에서도 사용할 수 있도록 작성
    let newArray = array.slice(); // ★ 배열 복사본으로 계산 ★
    newArray.push(element);
    return newArray;
}

// DOM을 조작하므로 액션이다.
function calculateCartTotal(cart) {
    let totalPrice = calculateTotal(cart);
    setCartTotalDom(totalPrice);
    return totalPrice;
}

// 암시적 입출력이 없으므로 계산이다.
function calculateTotal(cart) {
    let shoppingCartTotal = 0;
    for (let i = 0; i < cart.length; i++) {
        shoppingCartTotal += cart[i].price;
    }
    return shoppingCartTotal;
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