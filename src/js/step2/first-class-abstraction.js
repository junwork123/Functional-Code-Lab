function objectSet(obj, key, value) {
    let copy = obj.assign({}, obj); // 객체 복사
    obj[key] = value;
    return copy;
}

function setPriceByName(cart, name, price) {
    let item = cart[name];
    let newItem = objectSet(item, 'price', price);
    return objectSet(cart, name, newItem);
}

function setQuantityByName(cart, name, quantity) {
    let item = cart[name];
    let newItem = objectSet(item, 'quantity', quantity);
    return objectSet(cart, name, newItem);
}