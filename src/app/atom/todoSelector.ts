import { selector, selectorFamily } from 'recoil';
import { todoListState, todoTask } from './todoAtom';

// SelectorFamily to derive individual todo by ID
// const todoSelector = selectorFamily({
//     key: "todoSelector",
//     get: (id) => ({ get }) => {
//       const todoList = get(todoListAtom);
//       return todoList.find((todo) => todo.id === id);
//     },
//     set: (id) => ({ get, set }, newValue) => {
//       const todoList = get(todoListAtom);
//       const updatedTodoList = todoList.map((todo) =>
//         todo.id === id ? { ...todo, ...newValue } : todo
//       );
//       set(todoListAtom, updatedTodoList);
//     },
//   });

export const addTodoSelector = selector({
  key: 'addTodoSelector',
  get: ({ get }) => get(todoListState), // Return the current state
  set: ({ get, set }, newTodo) => {
    const currentTodos = get(todoListState);
    set(todoListState, [...currentTodos, newTodo]);

    // after inserting todo into list, clear input field
    set(todoTask, '');
  },
});

export const totalTodo = selector({
  key: 'totalToDo',
  get: ({ get }) => {
    const todo = get(todoListState);
    return todo.length;
  },
});
