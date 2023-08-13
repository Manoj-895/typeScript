"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = [];
var names = [];
function identity(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
// Short cut
function identityFour(val) {
    return val;
}
identityThree("3"); // to pass built in data types you can call directly
var bootle1 = { name: "zero", type: "gym" };
identityFour({ name: "one", type: "gym" });
identityFour(bootle1);
// generics for arrays 
function getSearchedProduct(product) {
    return product[3];
}
// in arrow functions
var getSearchedProduct2 = function (products) {
    return products[0];
};
getSearchedProduct2([1, 2, 3, 4]);
