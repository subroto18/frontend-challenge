import React from 'react';
import { useRecoilCallback, useRecoilState, useRecoilValue } from 'recoil';

import {
  deleteTodosSelector,
  filteredTodosSelector,
  filterSelector,
} from '../../atom/todoSelector';

import { COMPLETED, INCOMPLETE } from 'src/libs/shared/utils/helper';
import { confirmAlert } from 'react-confirm-alert';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';

const Todo = () => {
  const [filter, setFilter] = useRecoilState(filterSelector);

  // filter todo based on filter status
  const filteredTodoBaseOn =
    filter.activeFilter === COMPLETED
      ? COMPLETED
      : filter.activeFilter === INCOMPLETE
      ? INCOMPLETE
      : '';

  return (
    <section className="bg-slate-200 flex justify-center h-screen">
      <div className="bg-white w-[70%] rounded-sm shadow-md h-[80%] mt-[5rem] p-10 relative">
        <Header />
        <Body />
        <Footer />
      </div>
    </section>
  );
};

export default Todo;
