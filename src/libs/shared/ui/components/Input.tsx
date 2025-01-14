import React from 'react';

const Input = ({ value, placeholder, type, onChange, className }) => {
  return (
    <input
      className={` mt-1 border-b-1 border-slate-50 focus:border-blue-500 outline-none w-full ${
        className ? className : ''
      }`}
      type={`${type ? type : 'text'}`}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
