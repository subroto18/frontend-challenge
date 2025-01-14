import React from 'react';

interface props {
  value?: string;
  bg?: string;
}

const Badge = ({ value, bg }: props) => {
  return (
    <span
      className={`${bg} ml-2  text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300`}
    >
      {value}
    </span>
  );
};

export default Badge;
