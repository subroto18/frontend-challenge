import React from 'react';

const Input = ({ value, placeholder, type, onChange }) => {
  return (
    <div className="relative w-full max-w-sm mx-auto">
      <input
        className="border-0 border-b-[1px] border-gray-500 focus:border-blue-500 outline-none w-full"
        type={`${type ? type : 'text'}`}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      {/* {showSuggestions && filteredSuggestions.length > 0 && (
        <ul className="absolute left-0 right-0 z-10 bg-white border rounded-lg shadow-lg max-h-48 overflow-y-auto">
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSelect(suggestion)}
              className="px-4 py-2 cursor-pointer hover:bg-blue-100"
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )} */}
    </div>
  );
};

export default Input;
