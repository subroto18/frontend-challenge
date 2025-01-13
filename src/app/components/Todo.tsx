import React, { useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import Button from 'src/libs/shared/ui/components/Button';
import Checkbox from 'src/libs/shared/ui/components/Checkbox';
import Input from 'src/libs/shared/ui/components/Input';
import { todoListState, todoTask } from '../atom/todoAtom';
import { addTodoSelector, totalTodo } from '../atom/todoSelector';
import Autocomplete from 'src/libs/shared/ui/components/AutoComplete';

const Todo = () => {
  const [input, setInput] = useRecoilState(todoTask);
  const totalToDo = useRecoilValue(totalTodo);
  const addTodo = useSetRecoilState(addTodoSelector);
  const todoList = useRecoilValue(todoListState);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    const newToDo = {
      id: totalToDo + 1,
      task: input,
      isCompleted: false,
    };

    if (input) {
      addTodo(newToDo);
    }
  };

  return (
    <section className="bg-slate-200 flex justify-center h-screen">
      <div className="bg-white w-[70%] rounded-sm shadow-md h-[80%] mt-[5rem] p-10">
        <h2 className="text-2xl font-bold mb-3">Todo List</h2>

        <ul className="w-full">
          <li className=" w-[100%] mb-3">
            {todoList?.map((item) => {
              return <Checkbox value={item} />;
            })}
          </li>
        </ul>

        <div className="flex">
          <Button className={'w-[4%] h-[2rem] mr-5 '} value={'+'} />
          <Input
            onChange={handleInput}
            className=""
            value={input}
            placeholder={'Memoize the dictonary'}
          />
          <Autocomplete />
          <Button
            onClick={handleClick}
            className={'w-[8rem] h-[2rem]  ml-5'}
            value={'Add Item'}
          />
        </div>
      </div>
    </section>
  );
};

export default Todo;
