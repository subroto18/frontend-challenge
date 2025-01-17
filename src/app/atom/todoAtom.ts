import { atom } from 'recoil';
import { Task } from 'src/libs/shared/lib/types';

// all to do list

export const todoListState = atom<Task[]>({
  key: 'todo', // Unique key for this atom
  default: [], // Initial state goes here
  effects_UNSTABLE: [
    ({ setSelf, onSet }) => {
      // Initialize from localStorage
      const savedTodos = localStorage.getItem('todoList');
      if (savedTodos) {
        setSelf(JSON.parse(savedTodos)); // Load saved todos
      }
      // Sync with localStorage whenever the atom changes
      onSet((newTodos) => {
        localStorage.setItem('todoList', JSON.stringify(newTodos));
      });
    },
  ],
});

// input data while adding
export const todoTask = atom<string>({
  key: 'task',
  default: '',
});

export const isAutoCompleteVisible = atom<boolean>({
  key: 'isAutoCompleteVisible',
  default: false,
});

export const filter = atom<{
  active: boolean;
  activeFilter: string;
}>({
  key: 'filter',
  default: {
    active: false, // filter active or not
    activeFilter: '', // which one is active -> completed / in complete
  },
});
