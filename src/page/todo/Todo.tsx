import React, { useCallback, useState } from 'react';
import { Button, Checkbox, Space, Input } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { createPortal } from 'react-dom';
import './Todo.scss';
import MySelect from '../../components/select/MySelect';
import Typewriter from '../../components/taskManager/TextWrite';

import { useDispatch, useSelector } from 'react-redux';
import { addTodo as addTodoAction, removeTodo as removeTodoAction, toggleCompleted as toggleCompletedAction } from '../../store/todoSlice';
import type { RootState } from '../../store/store';

const { Search } = Input;

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todo.todos);
  const [newTodoText, setNewTodoText] = useState('');
  const [searchText, setSearchText] = useState('');
  const [showPortal, setShowPortal] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string>('all');

  const dispatch = useDispatch();

  const addTodo = useCallback(() => {
    const newTodo = {
      id: Date.now(),
      title: newTodoText,
      completed: false,
    };
    dispatch(addTodoAction(newTodo));
    setNewTodoText('');
  }, [dispatch, newTodoText]);

  const removeTodo = (id: number) => {
    dispatch(removeTodoAction(id));
  };

  const toggleCompleted = useCallback((id: number) => {
    dispatch(toggleCompletedAction(id));
  }, [dispatch]);

  const filteredTodos = () => {
    let filteredTodos = todos;

    if (searchText) {
      filteredTodos = filteredTodos.filter((todo) =>
        todo.title.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    if (selectedValue === 'completed') {
      filteredTodos = filteredTodos.filter((todo) => todo.completed);
    } else if (selectedValue === 'uncompleted') {
      filteredTodos = filteredTodos.filter((todo) => !todo.completed);
    }

    return filteredTodos;
  };

  const PortalInfo = () => {
    if (!showPortal) return null;
    return createPortal(
      <div className='portal'>
        <div className='portal-content'>
          <h2>Portal content</h2>
          <p>This is some portal content.</p>
          <button onClick={() => setShowPortal(false)}>Close</button>
        </div>
      </div>,
      document.body
    );
  };

  return (
    <div className='todo-container'>
      <div className='inputAdd'>
        <Input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          placeholder="Enter your todo"
        />
        <Button color="primary" variant="solid" onClick={addTodo} disabled={newTodoText.trim() === ''}>Add todo</Button>
        <ul>
          {filteredTodos().map((todo: Todo) => (
            <li key={todo.id}>
              <Checkbox
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleCompleted(todo.id)}
              />
              <div className='title' style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.title}
              </div>
              <Button color="danger" variant="solid" onClick={() => removeTodo(todo.id)}>Delete</Button>
            </li>
          ))}
        </ul>
      </div>
      <Typewriter text="Hi, write down your tasks soon so you don't forget! =)))" delay={50} />

      <div className='todo-list'>
        <Search
          placeholder="input search text"
          enterButton="Search"
          size="large"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Space wrap>
          <MySelect selectedValue={selectedValue} setSelectedValue={setSelectedValue} />
        </Space>
      </div>

      <div className='info'>
        <InfoCircleOutlined onClick={() => setShowPortal(true)} />
        <PortalInfo />
      </div>
    </div>
  );
};

export default TodoList;