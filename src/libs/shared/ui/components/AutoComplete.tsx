import React from 'react';

const AutoComplete = ({ data, isVisible, onClick, className }) => {
  return isVisible && data?.length > 0 ? (
    <ul
      className={`${
        className ? className : ''
      } bg-white border rounded-lg shadow-lg max-h-48 overflow-y-auto mt-4`}
    >
      {data?.map((item) => {
        return (
          <li
            key={item.key}
            className="px-4 py-2 cursor-pointer hover:bg-blue-100"
            onClick={() => onClick(item)}
          >
            {item.task}
          </li>
        );
      })}
    </ul>
  ) : (
    <></>
  );
};

export default AutoComplete;
