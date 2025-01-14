import React from 'react';
import { Task } from '../../lib/types';

interface props {
  data: Task[];
  isVisible?: boolean;
  onClick: (event: Task) => void;
  className?: string;
}

const AutoComplete = ({ data, isVisible, onClick, className }: props) => {
  return isVisible && data?.length > 0 ? (
    <ul
      className={`${
        className ? className : ''
      } bg-white border rounded-lg shadow-lg max-h-48 overflow-y-auto mt-4`}
    >
      {data?.map((item) => {
        return (
          <li
            key={item.id}
            className="px-4 py-2 cursor-pointer hover:bg-blue-100"
            onClick={() => onClick(item)}
          >
            {item?.task}
          </li>
        );
      })}
    </ul>
  ) : null;
};

export default AutoComplete;
