import React from 'react';
import Checkbox from 'src/libs/shared/ui/components/Checkbox';
import { AiFillDelete } from 'react-icons/ai';
import { confirmAlert } from 'react-confirm-alert';
import { useRecoilCallback, useRecoilValue } from 'recoil';
import {
  deleteTodosSelector,
  filteredTodosSelector,
  filterSelector,
} from 'src/app/atom/todoSelector';
import { COMPLETED, INCOMPLETE } from 'src/libs/shared/utils/helper';

const Body = () => {
  const filter = useRecoilValue(filterSelector);

  // filter todo based on filter status
  const filteredTodoBaseOn =
    filter?.activeFilter === COMPLETED
      ? COMPLETED
      : filter?.activeFilter === INCOMPLETE
      ? INCOMPLETE
      : '';

  // Create a callback to delete a todo dynamically
  const todoList = useRecoilValue(filteredTodosSelector(filteredTodoBaseOn));
  const handleDeleteTodo = (id: number) => {
    confirmAlert({
      title: 'Delete?',
      message: 'Are you sure to delete it',
      buttons: [
        {
          label: 'Yes',
          onClick: () => deleteTodo(id),
        },
        {
          label: 'No',
          onClick: () => null,
        },
      ],
    });
  };

  const deleteTodo = useRecoilCallback(({ set }) => (id) => {
    set(deleteTodosSelector(id), null); // Call the selector with the specific id
  });

  return (
    <div className="h-[100%] overflow-auto">
      <ul className="my-8 w-full">
        <li className="w-[100%] mb-3">
          {todoList.length === 0 && (
            <div>
              <p className="text-sm text-slate-400">There is no task </p>
            </div>
          )}
          {todoList?.map((item) => {
            return (
              <div className="flex border-b-2 mb-2">
                <Checkbox data={item} />
                {item.isCompleted && (
                  <AiFillDelete
                    onClick={() => handleDeleteTodo(item.id)}
                    className="text-red-500 text-[12px] mt-2 ml-1 cursor-pointer"
                  />
                )}
              </div>
            );
          })}
        </li>
      </ul>
    </div>
  );
};

export default Body;
