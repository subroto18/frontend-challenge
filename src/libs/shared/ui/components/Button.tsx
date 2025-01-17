import React from 'react';

interface props {
  value?: string;
  width?: string;
  isVisible?: boolean;
  onClick?: () => void;
  className?: string;
}

const Button = ({ value, width, className, onClick }: props) => {
  return (
    <button
      onClick={onClick}
      className={`px-2 bg-purple-500 text-white font-semibold rounded-lg shadow-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75 w-[5%] ${
        className ? className : ''
      }`}
    >
      {value}
    </button>
  );
};

export default Button;
