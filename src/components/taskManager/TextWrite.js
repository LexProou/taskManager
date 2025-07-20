"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
require("./TextWrite.scss");
var Typewriter = function (_a) {
    var text = _a.text, delay = _a.delay;
    var _b = (0, react_1.useState)(''), displayedText = _b[0], setDisplayedText = _b[1];
    var _c = (0, react_1.useState)(0), index = _c[0], setIndex = _c[1];
    (0, react_1.useEffect)(function () {
        if (index < text.length) {
            var timeoutId_1 = setTimeout(function () {
                setDisplayedText(function (prevText) { return prevText + text[index]; });
                setIndex(function (prevIndex) { return prevIndex + 1; });
            }, delay);
            return function () { return clearTimeout(timeoutId_1); };
        }
    }, [index, text, delay]);
    return react_1.default.createElement("span", { className: "typewriter" }, displayedText);
};
exports.default = Typewriter;
