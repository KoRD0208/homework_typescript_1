"use strict";
exports.__esModule = true;
var react_1 = require("react");
function UserInfo(_a) {
    var userProps = _a.userProps;
    return (react_1["default"].createElement("div", { className: "user" },
        react_1["default"].createElement("div", { className: "user__name" }, userProps.name),
        react_1["default"].createElement("div", { className: "user__username" },
            react_1["default"].createElement("p", null, "Username:"),
            userProps.username),
        react_1["default"].createElement("div", { className: "user__email" },
            react_1["default"].createElement("p", null, "E-mail:"),
            userProps.email)));
}
exports["default"] = UserInfo;
