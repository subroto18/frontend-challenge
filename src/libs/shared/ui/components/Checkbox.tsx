import React from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { todoListState } from 'src/app/atom/todoAtom';

const Checkbox = ({ value }) => {
  const [todo, setTodo] = useRecoilState(todoListState);

  const handleCheckBox = (data) => {
    setTodo((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === data.id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );

    // let updatedTodo = todo.map((item) => {
    //   if (item.id == data.id) {
    //     return {
    //       ...data,
    //       isCompleted: !data.isCompleted,
    //     };
    //     return item;
    //   }
    // });
    // setTodo(updatedTodo);
  };

  return (
    <div key={value.id} className="flex mb-2  ">
      <input type="checkbox" className="peer hidden" />
      <div
        onClick={() => handleCheckBox(value)}
        className={`${
          value.isCompleted ? 'bg-[#7227f7]' : 'bg-gray-100'
        } w-6 h-6    border-4 border-[#7227f7] rounded-full peer-checked:bg-[#7227f7] peer-checked:border-[#7227f7] peer-focus:ring-2 peer-focus:ring-[#7227f7] mr-1 cursor-pointer`}
      ></div>
      <label className="text-md  text-gray-700 font-semibold">
        {value.task}
      </label>
    </div>
  );
};

export default Checkbox;
