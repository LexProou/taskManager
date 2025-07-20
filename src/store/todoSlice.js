"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggleCompleted = exports.removeTodo = exports.addTodo = void 0;
// todosSlice.ts
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    todos: [],
};
var todosSlice = (0, toolkit_1.createSlice)({
    name: 'todos',
    initialState: initialState,
    reducers: {
        addTodo: function (state, action) {
            state.todos.push(action.payload);
        },
        removeTodo: function (state, action) {
            state.todos = state.todos.filter(function (todo) { return todo.id !== action.payload; });
        },
        toggleCompleted: function (state, action) {
            var todo = state.todos.find(function (todo) { return todo.id === action.payload; });
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
    },
});
exports.addTodo = (_a = todosSlice.actions, _a.addTodo), exports.removeTodo = _a.removeTodo, exports.toggleCompleted = _a.toggleCompleted;
exports.default = todosSlice.reducer;
