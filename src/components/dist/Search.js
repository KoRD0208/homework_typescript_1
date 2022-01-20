"use strict";
exports.__esModule = true;
function Search(_a) {
    var value = _a.value, checkChange = _a.checkChange;
    function handleChange(e) {
        checkChange(e.target.value);
        console.log(value);
    }
    return (React.createElement("div", { className: "search-by-name" },
        React.createElement("label", { htmlFor: "search" }, "Enter a name:"),
        React.createElement("input", { type: "text", value: value, name: "search", onInput: function (e) { return handleChange(e); }, className: "search", placeholder: "Name" })));
}
exports["default"] = Search;
