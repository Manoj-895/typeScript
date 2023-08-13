"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// Abstract class and interface
/*You should use implements when you want to specify a set of rules,
 or 'contract', that a class must follow, and use extends
  when you want to create a subclass that inherits from a base class.*/
var TakePick = /** @class */ (function () {
    function TakePick(cameraType, filter) {
        this.cameraType = cameraType;
        this.filter = filter;
    }
    TakePick.prototype.tellRealmaxTime = function () {
        // complex calculations
        return 1;
    };
    return TakePick;
}());
var Insta = /** @class */ (function (_super) {
    __extends(Insta, _super);
    function Insta(cameraType, filter) {
        var _this = _super.call(this, cameraType, filter) || this;
        _this.cameraType = cameraType;
        _this.filter = filter;
        return _this;
    }
    Insta.prototype.needMee = function () {
        return true;
    };
    return Insta;
}(TakePick));
var facebook = new Insta("dslr", "dawn light");
console.log(facebook.tellRealmaxTime()); // we can use the methods which are not defined in class Insta but defined in TakePick directly in facebook as its a object of Insta
