import React from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from 'src/app/atom/todoAtom';
import { TASK_SHOW_COUNT } from '../../utils/helper';
import { Task } from '../../lib/types';

const Checkbox: React.FC<Task> = (data) => {
  const setTodo = useSetRecoilState(todoListState);

  const handleCheckBox = (data: Task) => {
    setTodo((prevTodos) =>
      prevTodos.map((todo) =>
        todo?.id === data?.id
          ? { ...todo, isCompleted: !todo?.isCompleted }
          : todo
      )
    );
  };

  return (
    <div key={data?.id} className="flex mb-2  ">
      <input type="checkbox" className="peer hidden" />
      <div
        onClick={() => handleCheckBox(data)}
        className={`${
          data?.isCompleted ? 'bg-[#7227f7]' : 'bg-gray-100'
        } w-6 h-6    border-4 border-[#7227f7] rounded-full peer-checked:bg-[#7227f7] peer-checked:border-[#7227f7] peer-focus:ring-2 peer-focus:ring-[#7227f7] mr-1 cursor-pointer`}
      ></div>
      <label
        title={data?.task}
        className={`${
          data.isCompleted ? 'line-through' : ''
        } text-md  text-gray-700 font-semibold `}
      >
        {data?.task?.length > TASK_SHOW_COUNT
          ? data?.task?.slice(0, TASK_SHOW_COUNT) + '...'
          : data?.task}
      </label>
    </div>
  );
};

export default Checkbox;
