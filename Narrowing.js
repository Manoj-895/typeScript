"use strict";
// code for narrowing the type of variable
Object.defineProperty(exports, "__esModule", { value: true });
function detectType(val) {
    if (typeof val === 'string')
        return val.toLowerCase(); // here you have narrowed to sting
    return val + 3;
}
detectType("Babyaa");
function provideId(id) {
    if (!id) {
        return "No ID";
    }
    return id.toLowerCase();
}
function checkAdmin(val) {
    if ("isAdmin" in val) { // we re using in operator to check the type
        return val.isAdmin;
    }
    return false;
}
// instance of comes with new keyword
function logValue(val) {
    if (val instanceof Date) { // instance of used in new keyword
        console.log(val.toLocaleTimeString);
    }
    else {
        console.log(val, 'is a string');
    }
}
function isFish(val) {
    return val.swim !== undefined;
}
function getFood(val) {
    if (isFish(val)) {
        console.log('fish food', val);
    }
    else {
        console.log('bird food', val);
    }
}
function fetchArea(val) {
    switch (val.kind) {
        case ("circle"):
            return 3.14 * val.radius * val.radius;
        case ("square"):
            return val.side * val.side;
        case ("rectangle"):
            return val.breadth * val.length;
        default:
            var defaultArea = val;
            return defaultArea;
    }
}
