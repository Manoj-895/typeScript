"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var manaya = {
    userId: 1,
    name: 'Manaya',
    date: new Date('1999'),
    age: 22,
    isavailable: true,
    checkElihibility: function () {
        return true;
    },
    checkIfworking: function () {
        return true;
    }
};
// let teja :Admin = {
// }
console.log(manaya.checkElihibility, manaya.checkIfworking);
