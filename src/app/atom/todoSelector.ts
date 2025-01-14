import { filterSelector } from './todoSelector';
import { AutoComplete } from 'src/libs/shared/ui/components/AutoComplete';
import { selector, selectorFamily } from 'recoil';
import {
  isAutoCompleteVisible,
  todoListState,
  todoTask,
  filter,
} from './todoAtom';
import { toast } from 'react-toastify';
import { COMPLETED, INCOMPLETE } from 'src/libs/shared/utils/helper';

// for add todo
export const addTodoSelector = selector({
  key: 'addTodoSelector',
  get: ({ get }) => get(todoListState), // Return the current state
  set: ({ get, set }, newTodo) => {
    const currentTodos = get(todoListState);

    const isTaskExistAlready = currentTodos.find((item) => {
      if (
        item.task.toLowerCase() == newTodo.task.toLowerCase() &&
        !item.isCompleted
      ) {
        return true;
      }
    });

    if (!isTaskExistAlready) {
      set(todoListState, [...currentTodos, newTodo]);
      // after inserting todo into list, clear input field
      set(todoTask, '');
    } else {
      toast.warn('Task already exist');
    }
  },
});

// for count todo
export const totalTodo = selector({
  key: 'totalToDo',
  get: ({ get }) => {
    const todo = get(todoListState);
    return todo.length;
  },
});

// for search

export const searchTodo = selector({
  key: 'autoCompleteTodo',
  get: ({ get }) => {
    const todos = get(todoListState);
    let searchData = get(todoTask)?.toLocaleLowerCase(); // input data

    if (!searchData) return [];

    let searchList = todos.filter((todo) => {
      return todo.task.toLowerCase().includes(searchData);
    });

    // only unique

    let uniqueList = Array.from(
      new Map(searchList.map((item) => [item.task, item])).values()
    );

    // only 5
    return uniqueList?.slice(0, 5);
  },
});

// for filter

export const filterSelector = selector({
  key: 'filterSelector',
  get: ({ get }) => {
    return get(filter);
  },
  set: ({ get, set }, newState) => {
    const filterState = get(filter);

    set(filter, {
      ...filterState,
      ...newState,
    });
  },
});

// Selector family for filtering todos
export const filteredTodosSelector = selectorFamily({
  key: 'filteredTodosSelector',
  get:
    (filterType) =>
    ({ get }) => {
      const todos = get(todoListState);
      const filterRes = get(filter);
      const isFilterActive = filterRes.active;
      if (filterType === COMPLETED && isFilterActive) {
        return todos.filter((todo) => todo.isCompleted);
      } else if (filterType === INCOMPLETE && isFilterActive) {
        return todos.filter((todo) => !todo.isCompleted);
      }
      return todos; // Return all todos for an 'all' filter or unknown type
    },
});

export const deleteTodosSelector = selectorFamily({
  key: 'deleteTodosSelector',
  get:
    () =>
    ({ get }) => {
      return;
    },
  set:
    (id) =>
    ({ get, set }) => {
      const todos = get(todoListState);
      const updatedTodo = todos.filter((item) => item.id !== id);
      set(todoListState, updatedTodo);
      toast.success('Deleted successfully');
    },
});
