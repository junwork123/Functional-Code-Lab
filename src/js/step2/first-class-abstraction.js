function objectSet(obj, key, value) {
    let copy = obj.assign({}, obj); // 객체 복사
    obj[key] = value;
    return copy;
}

function setFieldByName(cart, name, fieldName, value) {
    let item = cart[name];
    let newItem = objectSet(item, fieldName, value);
    return objectSet(cart, name, newItem);
}

function setPriceByName(cart, name, price) {
    return setFieldByName(cart, name, 'price', price);
}

function setQuantityByName(cart, name, quantity) {
    return setFieldByName(cart, name, 'quantity', quantity);
}