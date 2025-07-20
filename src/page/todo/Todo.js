"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var react_dom_1 = require("react-dom");
require("./Todo.scss");
var MySelect_1 = require("../../components/select/MySelect");
var TextWrite_1 = require("../../components/taskManager/TextWrite");
var react_redux_1 = require("react-redux");
var todoSlice_1 = require("../../store/todoSlice");
var Search = antd_1.Input.Search;
var TodoList = function () {
    var todos = (0, react_redux_1.useSelector)(function (state) { return state.todo.todos; });
    var _a = (0, react_1.useState)(''), newTodoText = _a[0], setNewTodoText = _a[1];
    var _b = (0, react_1.useState)(''), searchText = _b[0], setSearchText = _b[1];
    var _c = (0, react_1.useState)(false), showPortal = _c[0], setShowPortal = _c[1];
    var _d = (0, react_1.useState)('all'), selectedValue = _d[0], setSelectedValue = _d[1];
    var dispatch = (0, react_redux_1.useDispatch)();
    var addTodo = (0, react_1.useCallback)(function () {
        var newTodo = {
            id: Date.now(),
            title: newTodoText,
            completed: false,
        };
        dispatch((0, todoSlice_1.addTodo)(newTodo));
        setNewTodoText('');
    }, [dispatch, newTodoText]);
    var removeTodo = function (id) {
        dispatch((0, todoSlice_1.removeTodo)(id));
    };
    var toggleCompleted = (0, react_1.useCallback)(function (id) {
        dispatch((0, todoSlice_1.toggleCompleted)(id));
    }, [dispatch]);
    var filteredTodos = function () {
        var filteredTodos = todos;
        if (searchText) {
            filteredTodos = filteredTodos.filter(function (todo) {
                return todo.title.toLowerCase().includes(searchText.toLowerCase());
            });
        }
        if (selectedValue === 'completed') {
            filteredTodos = filteredTodos.filter(function (todo) { return todo.completed; });
        }
        else if (selectedValue === 'uncompleted') {
            filteredTodos = filteredTodos.filter(function (todo) { return !todo.completed; });
        }
        return filteredTodos;
    };
    var PortalInfo = function () {
        if (!showPortal)
            return null;
        return (0, react_dom_1.createPortal)(react_1.default.createElement("div", { className: 'portal' },
            react_1.default.createElement("div", { className: 'portal-content' },
                react_1.default.createElement("h2", null, "Portal content"),
                react_1.default.createElement("p", null, "This is some portal content."),
                react_1.default.createElement("button", { onClick: function () { return setShowPortal(false); } }, "Close"))), document.body);
    };
    return (react_1.default.createElement("div", { className: 'todo-container' },
        react_1.default.createElement("div", { className: 'inputAdd' },
            react_1.default.createElement(antd_1.Input, { type: "text", value: newTodoText, onChange: function (e) { return setNewTodoText(e.target.value); }, placeholder: "Enter your todo" }),
            react_1.default.createElement(antd_1.Button, { color: "primary", variant: "solid", onClick: addTodo, disabled: newTodoText.trim() === '' }, "Add todo"),
            react_1.default.createElement("ul", null, filteredTodos().map(function (todo) { return (react_1.default.createElement("li", { key: todo.id },
                react_1.default.createElement(antd_1.Checkbox, { type: "checkbox", checked: todo.completed, onChange: function () { return toggleCompleted(todo.id); } }),
                react_1.default.createElement("div", { className: 'title', style: { textDecoration: todo.completed ? 'line-through' : 'none' } }, todo.title),
                react_1.default.createElement(antd_1.Button, { color: "danger", variant: "solid", onClick: function () { return removeTodo(todo.id); } }, "Delete"))); }))),
        react_1.default.createElement(TextWrite_1.default, { text: "Hi, write down your tasks soon so you don't forget! =)))", delay: 50 }),
        react_1.default.createElement("div", { className: 'todo-list' },
            react_1.default.createElement(Search, { placeholder: "input search text", enterButton: "Search", size: "large", value: searchText, onChange: function (e) { return setSearchText(e.target.value); } }),
            react_1.default.createElement(antd_1.Space, { wrap: true },
                react_1.default.createElement(MySelect_1.default, { selectedValue: selectedValue, setSelectedValue: setSelectedValue }))),
        react_1.default.createElement("div", { className: 'info' },
            react_1.default.createElement(icons_1.InfoCircleOutlined, { onClick: function () { return setShowPortal(true); } }),
            react_1.default.createElement(PortalInfo, null))));
};
exports.default = TodoList;
