"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDispatch = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var todoSlice_1 = require("./todoSlice");
var store = (0, toolkit_1.configureStore)({
    reducer: {
        todo: todoSlice_1.default
    }
});
exports.AppDispatch = typeof store.dispatch;
exports.default = store;
