import React from 'react';
import AutoComplete from 'src/libs/shared/ui/components/AutoComplete';
import Button from 'src/libs/shared/ui/components/Button';
import Input from 'src/libs/shared/ui/components/Input';
import {
  useRecoilCallback,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';
import { isAutoCompleteVisible, todoTask } from 'src/app/atom/todoAtom';
import {
  addTodoSelector,
  filterSelector,
  searchTodo,
  totalTodo,
} from 'src/app/atom/todoSelector';
const Footer = () => {
  const [filter, setFilter] = useRecoilState(filterSelector);
  const [input, setInput] = useRecoilState(todoTask);
  const totalToDo = useRecoilValue(totalTodo);
  const addTodo = useSetRecoilState(addTodoSelector);
  // const deleteTodo = useSetRecoilState(deleteTodosSelector); // Get the delete selector

  const [isAutoComplete, setIsAutoComplete] = useRecoilState(
    isAutoCompleteVisible
  );
  const searchTodoList = useRecoilValue(searchTodo);

  const handleInput = (e) => {
    setInput(e.target.value);

    if (e.target.value) {
      setIsAutoComplete(true);
    } else {
      setIsAutoComplete(false);
    }
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

  const handleAutoComplete = (data) => {
    setInput(data?.task);
    setIsAutoComplete(false);
  };

  return (
    <footer>
      {!filter.active && (
        <div className="absolute bg-slate-100 bottom-0 left-0 w-full border-t-2  text-center px-10 py-2 shadow-md ">
          <div className="flex ">
            <Button className={'w-[4%] h-[2rem] mr-5 '} value={'+'} />

            <div className="w-[80%]">
              <Input
                onChange={handleInput}
                value={input}
                className={'bg-slate-100'}
                placeholder={'Memoize the dictonary'}
              />
              <AutoComplete
                className={'absolute bottom-10'}
                isVisible={isAutoComplete}
                data={searchTodoList}
                onClick={handleAutoComplete}
              />
            </div>

            <Button
              onClick={handleClick}
              className={'w-[8rem] h-[2rem]  ml-5'}
              value={'Add Item'}
            />
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
