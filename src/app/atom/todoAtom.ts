import { atom } from 'recoil';

export const todoListState = atom({
  key: 'todo', // Unique key for this atom
  default: [
    {
      id: '1',
      task: 'make bed',
      isCompleted: false,
    },
    {
      id: '2',
      task: 'Exercise ',
      isCompleted: false,
    },
    {
      id: '3',
      task: 'Wake up early ',
      isCompleted: false,
    },
  ], // Initial state goes here
});

export const todoTask = atom({
  key: 'task',
  default: '',
});
