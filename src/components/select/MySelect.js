"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MySelect_module_scss_1 = require("./MySelect.module.scss");
var MySelect = function (_a) {
    var selectedValue = _a.selectedValue, setSelectedValue = _a.setSelectedValue;
    return (React.createElement("div", null,
        React.createElement("select", { value: selectedValue, onChange: function (e) { return setSelectedValue(e.target.value); }, style: { width: 150 }, className: MySelect_module_scss_1.default.MySelect },
            React.createElement("option", { value: "all" }, "All"),
            React.createElement("option", { value: "completed" }, "Completed"),
            React.createElement("option", { value: "uncompleted" }, "Uncompleted"))));
};
exports.default = MySelect;
