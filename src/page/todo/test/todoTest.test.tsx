import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoList from '../Todo.tsx';


test('renders TodoList component', () => {
  const { getByPlaceholderText } = render(<TodoList />);
  expect(getByPlaceholderText(/enter your todo/i)).toBeTruthy();
});

test('adds a new todo', () => {
  const { getByPlaceholderText, getByText } = render(<TodoList />);
  const input = getByPlaceholderText(/enter your todo/i);
  const addButton = getByText(/add todo/i);

  userEvent.type(input, 'New Task');
  userEvent.click(addButton);

  expect(getByText(/new task/i)).toBeTruthy();
});

test('toggles todo completion', () => {
  const { getByPlaceholderText, getByText, getByRole } = render(<TodoList />);
  const input = getByPlaceholderText(/enter your todo/i);
  const addButton = getByText(/add todo/i);

  userEvent.type(input, 'New Task');
  userEvent.click(addButton);

  const checkbox = getByRole('checkbox');
  userEvent.click(checkbox);

  expect((checkbox as HTMLInputElement).checked).toBe(true);
});