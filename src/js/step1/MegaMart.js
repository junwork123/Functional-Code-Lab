let shoppingCart = [];
let shoppingCartTotal = 0;

function addToCart(name, price) {
    shoppingCart.push({
        name: name,
        price: price
    });
    calculateTotal();
}

function calculateTotal() {
    shoppingCartTotal = 0;
    for (let i = 0; i < shoppingCart.length; i++) {
        shoppingCartTotal += shoppingCart[i].price;
    }
    setCartTotalDom();
}

function setCartTotalDom() {
    // DOM manipulation
}
