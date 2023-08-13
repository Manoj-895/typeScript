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
var User = /** @class */ (function () {
    function User(name, cellNumber) {
        this.mailStr = "@end.com"; // if made private you cannot use anywhere 
        this.cellNumber = cellNumber;
        this.name = name;
    }
    return User;
}());
var Kitty = new User('Krishna', 98959794936);
console.log(Kitty.mailStr); // read only is fine 
//Kitty.mailStr = "@ended.com" // cannot since read only
var User2 = /** @class */ (function () {
    function User2(name, cellNumber, UserId) {
        this.name = name;
        this.cellNumber = cellNumber;
        this.UserId = UserId;
        this.courseCount = 1;
        this.giveAccesstoSubUser = true;
    } // easy way of writing the class condtructure without using  this keyword
    User2.prototype.SecretInfo = function () {
        return "this.UserId";
    };
    Object.defineProperty(User2.prototype, "getApplemail", {
        get: function () {
            return "".concat(this.name + "_" + this.cellNumber, "@apple.com");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User2.prototype, "getCourseCount", {
        get: function () {
            return this.courseCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User2.prototype, "setCourseCount", {
        set: function (count) {
            this.courseCount += count;
        },
        enumerable: false,
        configurable: true
    });
    return User2;
}());
var SubUser = /** @class */ (function (_super) {
    __extends(SubUser, _super);
    function SubUser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isShared = false;
        return _this;
    }
    SubUser.prototype.AllowAccess = function () {
        return this.giveAccesstoSubUser; // since its protected we are able to access in inherited class Private declarations are not accessible 
    };
    return SubUser;
}(User2));
var kitty2 = new User2("Krishna", 989597949, 12);
