"use strict";
exports.__esModule = true;
var react_1 = require("react");
var UserInfo_1 = require("./UserInfo");
function UserList(_a) {
    var users = _a.users, inputValue = _a.inputValue;
    return (react_1["default"].createElement("div", { className: "users" }, users
        .filter(function (user) { return user.name.toLowerCase().includes(inputValue.toLowerCase().trim()); })
        .map(function (user) {
        return react_1["default"].createElement(UserInfo_1["default"], { userProps: user, key: user.id });
    })));
}
exports["default"] = UserList;
