"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = "manoj";
console.log("hello world!", user);
var name = "Manoj";
name.replace("M", "A");
console.log(name);
function getDevName(name, experience) {
    if (name === void 0) { name = "bro"; }
    return "dev is" + name + "." + experience;
    // return 1
}
getDevName("mana", 5);
var getYourIDs = function (name) {
    return 12;
};
getYourIDs("na,na");
var allArr = ["thor", "spiderman", "iron man"];
allArr.map(function (a) {
    return a.slice();
});
var getError = function (err) {
    console.log(err);
    // return "err"
};
var getErrors = function (err) {
    throw new Error(err);
    console.log(err);
    // return "err"
};
var yourObj = function (_a) {
    var string = _a.name, number = _a.data, boolean = _a.isPaid;
    return { userID: 123, isPaid: false };
};
function isOurUser(user) {
    return { id: user.id, name: user.name, isvalid: true };
}
isOurUser({ name: "mam", id: 1, isvalid: false });
var ReadOnlyuser = {
    _id: "1212", phone: 12121
};
var cardHolderDetails = {
    cardHolder: "prakash", cardcvv: 121, cardNumber: 21
};
