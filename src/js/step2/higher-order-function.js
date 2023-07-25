foods = ['pizza', 'burger', 'donuts'];
for (let i = 0; i < foods.length; i++) {
    console.log(foods[i]);
    cook(foods[i]);
    eat(foods[i]);
}

function cookAndEatFoods(foods) {
    for (let i = 0; i < foods.length; i++) {
        console.log(foods[i]);
        cook(foods[i]);
        eat(foods[i]);
    }
}

function cookAndEat(foods) {
    console.log(foods[i]);
    cook(foods[i]);
    eat(foods[i]);
}

function repeatCookAndEat(foods) {
    for (let i = 0; i < foods.length; i++) {
        cookAndEat(foods[i]);
    }
}

function repeatAction(array, action) {
    for (let i = 0; i < array.length; i++) {
        action(array[i]);
    }
}

repeatAction(foods, cookAndEat);

function withLogging(func) {
    try {
        func();
    } catch (e) {
        console.log(e);
    }
}

withLogging(() => { saveUserData(user); });

function callOnCondition(func, condition) {
    return () => {
        if (condition()) {
            func();
        }
    }
}

function callAfterDelay(func, delay) {
    return () => {
        setTimeout(func, delay);
    }
}

